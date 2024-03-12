# Lightweight Charting Library

A simple library for generating basic charts with Chart.js and d3-scale. This library simplifies the process of creating and managing different types of charts in your web applications.

## Features

- Easy-to-use API for generating charts
- Support for line, bar, and pie charts
- Automatic color generation for datasets
- Responsive charts with auto-resizing

## Installation

```bash
npm install lightweight-chart-library
```

## Usage

```javascript
import LightweightCharting from 'lightweight-chart-library';

const chart = new LightweightCharting('#chart', {
type: 'line', // 'bar', 'pie'
data: {
labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
datasets: [{
label: 'Demo Data',
data: [65, 59, 80, 81, 56, 55, 40],
fill: false,
borderColor: 'rgb(75, 192, 192)',
tension: 0.1
}]
},
options: {} // Chart.js options
});

// Update chart data
chart.updateData({
labels: ['August', 'September', 'October', 'November', 'December'],
datasets: [{
label: 'Updated Data',
data: [28, 48, 40, 19, 86, 27, 90],
fill: false,
borderColor: 'rgb(255, 99, 132)',
tension: 0.1
}]
});
```

## Dependencies

- chart.js: For rendering charts.
- d3-scale: Used to compute scales for chart axes.
- chroma-js: For generating and manipulating colors.
- resize-observer-polyfill: Polyfill for ResizeObserver, enabling responsive charts.
- debounce: To debounce resize events for performance.

## License

MIT
