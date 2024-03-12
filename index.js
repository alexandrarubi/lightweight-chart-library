import Chart from 'chart.js/auto';
import { scaleLinear, scaleTime } from 'd3-scale';
import chroma from 'chroma-js';
import debounce from 'debounce';
import ResizeObserver from 'resize-observer-polyfill';

class LightweightCharting {
  constructor(selector, options) {
    this.selector = selector;
    this.options = options;
    this.chart = null;
    this.initChart();
  }

  initChart() {
    const ctx = document.querySelector(this.selector).getContext('2d');
    const { type, data, options } = this.options;

    this.chart = new Chart(ctx, {
      type,
      data,
      options: {
        ...options,
        maintainAspectRatio: false,
        onResize: debounce(this.handleResize.bind(this), 150),
      },
    });

    new ResizeObserver(entries => {
      for (let entry of entries) {
        this.chart.resize();
      }
    }).observe(ctx.canvas);
  }

  handleResize() {
    this.chart.update('resize');
  }

  updateData(newData) {
    this.chart.data = newData;
    this.chart.update();
  }

  static generateColors(count) {
    return Array.from({ length: count }, (_, i) => chroma.scale(['#f00', '#0f0', '#00f']).mode('lch').colors(count)[i]);
  }
}

export default LightweightCharting;
