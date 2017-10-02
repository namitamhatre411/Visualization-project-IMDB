function plot(selectedValue)
{
	var index = parseInt(selectedValue)

	switch(index) {
    
	case 1:
		plotRandom('./static/data/pca_random.csv')
		break
		
    case 2:
		plotStratified('./static/data/pca_stratified.csv')
		break
		
	case 3:
		plotRandom('./static/data/correlation_random.csv')
		break
		
	case 4:
		plotStratified('./static/data/correlation_stratified.csv')
		break
		
	case 5:
		plotRandom('./static/data/euclidean_random.csv')
		break
		
	case 6:
		plotStratified('./static/data/euclidean_stratified.csv')
		break
		
	case 7:
		plotLine('./static/data/scree_plot_for_random.csv')
		break
		
	case 8:
		plotLine('./static/data/scree_plot_for_stratified.csv')
		break
		
	case 9:
		PlotElbow('./static/data/elbow.csv')
		break
		
	case 10:
		plot_barchart('./static/data/pca_squared_loadings_random.csv')
		break
		
	case 11:
		plot_barchart('./static/data/pca_squared_loadings_stratified.csv')
		break
		
	case 12:
		scatterplot_matrix('./static/data/scatterplot_matrix_val_random.csv')
		break
		
	case 13:
		scatterplot_matrix('./static/data/scatterplot_matrix_val_stratified.csv')
		break	
	}
}
