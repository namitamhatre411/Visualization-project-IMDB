function plot_barchart(filename) {
	
	svg.selectAll("*").remove();
	
	var margin = {top: 20, right: 20, bottom: 70, left: 40},
		width = 600 - margin.left - margin.right,
		height = 300 - margin.top - margin.bottom;
	
	var x = d3.scale.ordinal().rangeRoundBands([0, width], .05);
	
	var y = d3.scale.linear().range([height, 0]);
	
	var xAxis = d3.svg.axis()
		.scale(x)
		.orient("bottom");
	
	var yAxis = d3.svg.axis()
		.scale(y)
		.orient("left")
		.ticks(10);
	
	d3.csv(filename, function(data) {
		data.forEach(function(d) {
			d.date = +d.attributes;
			d.value = +d.squared_loadings;
		});
		
	x.domain(data.map(function(d) { return d.attributes; }));
	y.domain([0, d3.max(data, function(d) { return d.squared_loadings; })]);
	svg.style("margin-left","120px")
	svg.append("g")
		.attr("class", "x axis")
		.attr("transform", "translate(100," + (height+10) + ")")
		.call(xAxis)
		.selectAll("text")
		.style("text-anchor", "end")
		.attr("dx", "-.8em")
		.attr("dy", "-.55em")
		.attr("transform", "rotate(-90)" );
	
	svg.append("text")
			.attr("transform", "translate(" + (width / 2+80) + " ," + (height + margin.bottom+10) + ")")
			.style("text-anchor", "middle")
			.text("Attributes");
	
	svg.append("g")
		.attr("class", "y axis")
		.attr("transform", "translate(100,10)")
		.call(yAxis)
		.append("text")
		.attr("transform", "rotate(-90)")
		.attr("y", 6)
		.attr("dy", ".71em")
		.style("text-anchor", "end")
		.text("Value");
	
	svg.append("text")
			.attr("transform", "rotate(-90)")
			.attr("y", lpad-60)
			.attr("x",h-400)
			.attr("dy", "1em")
			.style("text-anchor", "middle")
			.text("Squared Loadings");
	
	svg.selectAll("bar")
		.data(data)
		.enter().append("rect")
		.style("fill", function(d,i){ if(i<3){return "red";} else {return "blue";}})//"steelblue")
		.attr("transform", "translate(100,10)")
		.attr("x", function(d) { return x(d.attributes); })
		.attr("width", x.rangeBand())
		.attr("y", function(d) { return y(d.squared_loadings); })
		.attr("height", function(d) { return height - y(d.squared_loadings); });
	
	});
}