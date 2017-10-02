function plotRandom(filename) {
	
	svg.selectAll("*").remove();
    filename = "./" + filename;
    
    d3.csv(filename, function(data) {
        data.forEach(function(d) {
            d.col1 = +d.col1;
            d.col2 = +d.col2;
            d.type = +d.type;
        });
        var xValueR = function(d) { return d.col1;};
        var yValueR = function(d) { return d.col2;}; 
		
        xScale.domain([d3.min(data, xValueR)-0.2, d3.max(data, xValueR)+0.2]);
        yScale.domain([d3.max(data, yValueR)+0.2, d3.min(data, yValueR)-0.2]);
		svg.style("margin-left","10px")
        svg.append("g")
          .attr("class", "axis")
          .attr("transform", "translate(0, "+(h-pad-30)+")")
          .call(xAxis);
        svg.append("g")
          .attr("class", "axis")
          .attr("transform", "translate("+(lpad-pad+30)+", 0)")
          .call(yAxis);

        svg.append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", lpad-50)
        .attr("x",-150)
        .attr("dy", "1em")
        .attr("color", "blue")
        .style("text-anchor", "middle")
        .text("Component A");

        svg.append("text")
        .attr("y", 290)
        .attr("x",h+200)
        .attr("dy", "0em")
        .style("text-anchor", "middle")
        .text("Component B");

        svg.selectAll("circle")
            .data(data)
            .enter()
            .append("circle")
            .attr("r", 2)
            .attr("cx", function(d){
                return xScale(d.col1);
            }) 
            .attr("cy", function(d){
                return yScale(d.col2);
            })
            .attr("stroke", "blue")
            ;
    });
}

function plotStratified(filename) {
	
    filename = "./" + filename;
    svg.selectAll("*").remove();
    d3.csv(filename, function(error, data) {
        data.forEach(function(d) {
            d.col1 = +d.col1;
            d.col2 = +d.col2;
            d.type = +d.type;
        });

        var xValueR = function(d) { return d.col1;};
        var yValueR = function(d) { return d.col2;};
        
        xScale.domain([d3.min(data, xValueR)-0.2, d3.max(data, xValueR)+0.2]);
        yScale.domain([d3.max(data, yValueR)+0.2, d3.min(data, yValueR)-0.2]);
        
        svg.append("g")
          .attr("class", "axis")
          .attr("transform", "translate(0, "+(h-pad-30)+")")
          .call(xAxis);
 
        svg.append("g")
          .attr("class", "axis")
          .attr("transform", "translate("+(lpad-pad+30)+", 0)")
          .call(yAxis);

        svg.append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", lpad-50)
        .attr("x",-150)
        .attr("dy", "1em")
        .style("text-anchor", "middle")
        .text("Component A");

        svg.append("text")
        .attr("y", 290)
        .attr("x",h+200)
        .attr("dy", "0em")
        .style("text-anchor", "middle")
        .text("Component B");

        svg.selectAll("circle")
            .data(data)
            .enter()
            .append("circle")
            .attr("r", 2.5)
            .attr("cx", function(d){
                return xScale(d.col1);
            }) 
            .attr("cy", function(d){
                return yScale(d.col2);
            })
            .attr("stroke", "black");
    });
}