import numpy as np
import pandas as pd
import random
import csv

#Generate random sampling
def random_sampling_data(data, decimation_factor):
    # Take random samples from data using decimation factor to decimate the numbers of sample
    rows = random.sample(list(data.index),(int)(len(data)*decimation_factor))                     
    return data.ix[rows]

def movie_data(df):
    #random_sample_data = random_sampling_data(df, 0.1)
    movie_list = df['movie_title']
    income = df['gross']
    unique_dir = []
    dir_count = {}
    for name in movie_list:
        if name not in unique_dir:
            unique_dir.append(name)
            dir_count[name] = 10
        else:
            dir_count[name] = dir_count[name] + 1
    #print(dir_count)
    with open('dir.csv', 'w',newline='') as csv_file:
        writer = csv.writer(csv_file)
        for key, value in dir_count.items():
           writer.writerow([key, value])

def director_data(df):
    #random_sample_data = random_sampling_data(df, 0.1)
    dir_list = df['director_name']
    unique_dir = []
    dir_count = {}
    for name in dir_list:
        if name not in unique_dir:
            unique_dir.append(name)
            dir_count[name] = 20
        else:
            dir_count[name] = dir_count[name] + 1
    #print(dir_count)
    with open('dir.csv', 'w',newline='') as csv_file:
        writer = csv.writer(csv_file)
        for key, value in dir_count.items():
           writer.writerow([key, value])

def country_data(df):
    country_list = df['country']
    unique_country = []
    country_count = {}
    for name in country_list:
        if name not in unique_country:
            unique_country.append(name)
            country_count[name] = 30
        else:
            country_count[name] = country_count[name] + 1
    #print(country_count)
    
    with open('country.csv', 'w',newline='') as csv_file:
        writer = csv.writer(csv_file)
        for key, value in country_count.items():
            writer.writerow([key, value])

def read_data():
    df = pd.read_csv("movie_metadata.csv")
    return df

if __name__ == "__main__":
    df = read_data()
    random_sample_data = random_sampling_data(df, 0.05)
    print(len(random_sample_data))
    country_data(df)
    director_data(random_sample_data)
    #get_directors()


