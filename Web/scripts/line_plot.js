function plotLine(filename) {

    svg.selectAll("*").remove();	
    var margin = {top: 40, right: 40, bottom: 40, left: 50},
        width = 600 - margin.left - margin.right,
        height = 300 - margin.top - margin.bottom;
		
    var x = d3.scale.linear().range([0, width]);
    var y = d3.scale.linear().range([height, 0]);

    var xAxis = d3.svg.axis().scale(x)
        .orient("bottom").ticks(14);

    var yAxis = d3.svg.axis().scale(y)
        .orient("left").ticks(7);

    var valueline = d3.svg.line()
        .x(function(d) { return x(d.PCA_components); })
        .y(function(d) { return y(d.eigen_values); });

    var valuebase = d3.svg.line()
        .x(function(d) { return x(d.PCA_components); })
        .y(function(d) { return y(1); });

    d3.csv(filename, function(error, data) {
        data.forEach(function(d) {
            d.eigen_values = +d.eigen_values;
            d.PCA_components = +d.PCA_components;
        });
		
        x.domain(d3.extent(data, function(d) { return d.PCA_components; }));
        y.domain([0, d3.max(data, function(d) { return d.eigen_values; })]);
		
		svg.style("margin-left","150px")
        svg.append("path")
           .attr("class", "line")
           .attr("transform", "translate(50,10)")
           .attr("d", valueline(data));

        svg.append("path")
           .attr("class", "line")
           .attr("transform", "translate(50,10)")
           .attr("style","stroke:red")
           .attr("d", valuebase(data));

        svg.append("g")
           .attr("class", "x axis")
           .attr("transform", "translate(50," + (height+10) + ")")
           .call(xAxis);

        svg.append("text")
		   .attr("transform", "translate(" + (width / 2+40) + " ," + (height + margin.bottom+15) + ")")
		   .style("text-anchor", "middle")
		   .text("PCA Components");

        svg.append("g")
           .attr("class", "y axis")
           .attr("transform", "translate(50,10)")
           .call(yAxis);

		svg.append("text")
		   .attr("transform", "rotate(-90)")
		   .attr("y", lpad-90)
		   .attr("x",h-420)
		   .attr("dy", "1em")
		   .style("text-anchor", "middle")
		   .text("Eigen Values");
    });
}

function PlotElbow(filename) {

    svg.selectAll("*").remove();
    var margin = {top: 40, right: 40, bottom: 40, left: 50},
        width = 600 - margin.left - margin.right,
        height = 300 - margin.top - margin.bottom;

    var x = d3.scale.linear().range([0, width]);
    var y = d3.scale.linear().range([height, 0]);

    var xAxis = d3.svg.axis().scale(x)
        .orient("bottom").ticks(14);
    var yAxis = d3.svg.axis().scale(y)
        .orient("left").ticks(7);

	var valueline = d3.svg.line()
        .x(function(d) { return x(d.K); })
        .y(function(d) { console.log(d.Score); return y(d.Score); });

    d3.csv(filename, function(error,data) {
        data.forEach(function(d) {
            d.K = +d.K;
            d.Score = +d.Score;
        });

        x.domain(d3.extent(data, function(d) { return d.K; }));
        y.domain([0, d3.max(data, function(d) { return d.Score; })]);
	
	svg.style("margin-left","120px")
	
	svg.append("path")	
		.attr("class", "line")
		.attr("transform", "translate (" + 100 + " 0)")
		.attr("d", valueline(data));
 
	svg.append("g")		
		.attr("class", "x axis")
		.attr("transform", "translate(100," + height + ")")
		.call(xAxis);
	svg.append("text")
        .attr("transform", "translate(" + (width / 2 + 100) + " ," + (height + margin.bottom+10) + ")")
        .style("text-anchor", "middle")
        .text("Number of Clusters");
		
	svg.append("g")		
		.attr("class", "y axis")
		.attr("transform", "translate (" + 100 + " 0)")
		.call(yAxis);
	
    svg.append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", lpad-90)
        .attr("x",h-400)
        .attr("dy", "1em")
        .style("text-anchor", "middle")
        .text("K Means Score");});
}
