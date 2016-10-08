  //takes full processed Data to display: [{age: number, count: number, average?:boolean}]
app.directive('barChart', function() {
    return {
      restrict: 'E',
      scope: {
        color: '=', //number
        data: '=', //number
      },
      link: function(scope, element, attrs) {
        var margin = {top: 0, right: 0, bottom: 0, left: 0},
            width = d3.select(element[0]).node().getBoundingClientRect().width,
            height = d3.select(element[0]).node().getBoundingClientRect().height;

        var svg = d3.select(element[0]).append("svg")
            .attr("width", width)
            .attr("height", height)
        .append("g")

        var x = d3.scale.ordinal().rangeRoundBands([0, width], .05);

        var y = d3.scale.linear().range([height, 0]);

        var g = svg.append("g")

        x.domain(scope.data.map(function(d) { return d.time; }));
        y.domain([0, d3.max(scope.data, function(d) { return d.v; })]);

        g.selectAll(".bar")
            .data(scope.data)
            .enter().append("rect")
            .attr("class", "bar")
            .attr('fill', scope.color)
            .attr("x", function(d) { return x(d.time); })
            .attr("y", function(d) { return y(d.v); })
            .attr("width", x.rangeBand())
            .attr("height", function(d) { return height - y(d.v); });

      }
    };

  })