import {Component, OnInit} from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent implements OnInit {
  private data = [
    {'Year': '2018', 'Boys': '1222', 'Girls': '1011'},
    {'Year': '2019', 'Boys': '1021', 'Girls': '1002'},
    {'Year': '2020', 'Boys': '1001', 'Girls': '990'},
    {'Year': '2017', 'Boys': '901', 'Girls': '212'},
  ];
  private svg;
  private margin = 50;
  private width = 650 - (this.margin * 2);
  private height = 400 - (this.margin * 2);

  constructor() {
  }

  ngOnInit() {
    this.createSvg();
    this.drawBars(this.data);
  }

  private createSvg(): void {
    this.svg = d3.select('figure#bar')
      .append('svg')
      .attr('width', this.width + (this.margin * 2))
      .attr('height', this.height + (this.margin * 2))
      .append('g')
      .attr('transform', 'translate(' + this.margin + ',' + this.margin + ')');
  }

  private drawBars(data: any[]): void {
    // Create the X-axis band scale
    const x = d3.scaleBand()
      .range([0, this.width])
      .domain(data.map(d => d.Year))
      .padding(0.2);

    // Draw the X-axis on the DOM
    this.svg.append('g')
      .attr('transform', 'translate(0,' + this.height + ')')
      .call(d3.axisBottom(x))
      .selectAll('text')
      .attr('transform', 'translate(-10,0)rotate(-45)')
      .style('text-anchor', 'end');

    // Create the Y-axis band scale
    const y = d3.scaleLinear()
      .domain([0, 1500])
      .range([this.height, 0]);

    // Draw the Y-axis on the DOM
    this.svg.append('g')
      .call(d3.axisLeft(y));

    // Create and fill the bars
    this.svg.selectAll('bars')
      .data(data)
      .enter()
      .append('rect')
      .attr('x', d => x(d.Year))
      .attr('y', d => y(d.Boys))
      .attr('width', 55)
      .attr('height', (d) => this.height - y(d.Boys))
      .attr('fill', '#0d045f')
      .data(data)

      .append('rect')
      .attr('x', d => x(d.Year))
      .attr('y', d => y(d.Girls))
      .attr('width', 99)
      .attr('height', (d) => this.height - y(d.Girls))
      .attr('fill', '#8d8b9a');
  }

}
