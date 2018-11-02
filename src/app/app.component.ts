import {Component, Inject, OnInit} from '@angular/core';
import {DataProviderToken} from '../modules/common/services/dataProvider/constants';
import {IDataProvider} from '../modules/common/services/dataProvider';
import {ApiTeammateService} from '../modules/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(@Inject(DataProviderToken) private dataProvider: IDataProvider,
              private apiTeammateService: ApiTeammateService) {
  }

  ngOnInit() {
    this.dataProvider.setTeammates(this.apiTeammateService.getAll());
  }

  chart() {
    // function overlappingArea() {
    //   var g = svg.selectAll(".symbol");
    //
    //   line
    //     .y(function(d) { return y(d.price0 + d.price); });
    //
    //   g.select(".line")
    //     .attr("d", function(d) { return line(d.values); });
    //
    //   y
    //     .domain([0, d3.max(symbols.map(function(d) { return d.maxPrice; }))])
    //     .range([h, 0]);
    //
    //   area
    //     .y0(h)
    //     .y1(function(d) { return y(d.price); });
    //
    //   line
    //     .y(function(d) { return y(d.price); });
    //
    //   var t = g.transition()
    //     .duration(duration);
    //
    //   t.select(".line")
    //     .style("stroke-opacity", 1)
    //     .attr("d", function(d) { return line(d.values); });
    //
    //   t.select(".area")
    //     .style("fill-opacity", .5)
    //     .attr("d", function(d) { return area(d.values); });
    //
    //   t.select("text")
    //     .attr("dy", ".31em")
    //     .attr("transform", function(d) { d = d.values[d.values.length - 1]; return "translate(" + (w - 60) + "," + y(d.price) + ")"; });
    //
    //   svg.append("line")
    //     .attr("class", "line")
    //     .attr("x1", 0)
    //     .attr("x2", w - 60)
    //     .attr("y1", h)
    //     .attr("y2", h)
    //     .style("stroke-opacity", 1e-6)
    //     .transition()
    //     .duration(duration)
    //     .style("stroke-opacity", 1);
    //
    //   setTimeout(groupedBar, duration + delay);
    // }
  }
}
