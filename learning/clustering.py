import matplotlib.pyplot as plt
import numpy as np
from sklearn.cluster import KMeans
from sklearn.decomposition import PCA
from sklearn import metrics
from sklearn import preprocessing
from time import time


def print_header(n_class, n_samples, n_features):
    print("n_digits: %d, \t n_samples %d, \t n_features %d"
          % (n_class, n_samples, n_features))

    print(79 * '_')
    print('% 20s' % '                init' '    time  inertia    homo   compl  v-meas     ARI AMI  silhouette')

def bench_k_means(estimator, name, data, labels):
    t0 = time()
    estimator.fit(data)
    print('% 20s\t%.2fs\t%i\t%.3f\t%.3f\t%.3f\t%.3f\t%.3f\t%.3f'
          % (name, (time() - t0), estimator.inertia_,
             metrics.homogeneity_score(labels, estimator.labels_),
             metrics.completeness_score(labels, estimator.labels_),
             metrics.v_measure_score(labels, estimator.labels_),
             metrics.adjusted_rand_score(labels, estimator.labels_),
             metrics.adjusted_mutual_info_score(labels,  estimator.labels_),
             metrics.silhouette_score(data, estimator.labels_,
                                      metric='euclidean',
                                      sample_size=len(data))))

def region_converter(region_string):
    map = {
        " America": 1.0,
        " CHINA": 2.0,
        " Asia": 3.0,
        " Europe": 4.0,
        " Others": 5.0
    }

    return map[region_string]

converters = {
    3: lambda x: region_converter(x)
}

data_set = np.genfromtxt("full_matches.csv", delimiter=",", converters=converters)

data_set_game_mode = data_set[:, 2]
data_set_region = data_set[:, 3]
data_set_league_id = data_set[:, 4]
data_set_skill = data_set[:, 5]
data_set_win = data_set[:, 8]

data_set_features = data_set[:, 9:]

win_where = [i == 1 for i in data_set_win]

X = preprocessing.minmax_scale(data_set_features)

n_samples, n_features = X.shape
print_header(2, n_samples, n_features)

classes = [
    ("mode", data_set_game_mode, 4),
    ("region", data_set_region, 5),
    ("pros", data_set_league_id, 2),
    ("skill", data_set_skill, 3)
]

features_groups = [
    ("heros", 0, 9),
    ("farming", 9, 21),
    ("items", 21, 24),
    ("combat", 24, 29),
    ("objectives", 29, 34),
    ("all", 0, 34)
]

for class_type, y_real, nr_classes in classes:
    for feature_name, i, j in features_groups:
        test_name = class_type + "_" + feature_name
        X_ = X[:, i:j]
        bench_k_means(KMeans(n_clusters=nr_classes), test_name, X_, y_real)
        win_X_ = X_[np.array(win_where)]
        win_y_real = y_real[np.array(win_where)]
        bench_k_means(KMeans(n_clusters=nr_classes), "only_wins", win_X_, win_y_real)
