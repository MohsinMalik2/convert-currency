# I-Convert-Currency

`i-convert-currency` is a lightweight and easy-to-use npm package that provides seamless conversion between different currencies. It supports real-time exchange rates using the FreeCurrencyAPI, allowing you to accurately convert amounts from one currency to another. Whether you're building a financial application, an e-commerce platform, or simply need to display currency conversions, `i-convert-currency` offers a simple and efficient solution.

## Features

- **Real-Time Exchange Rates**: Access the latest exchange rates for accurate currency conversion.
- **Simple API**: A straightforward API for converting currency, designed to integrate easily into any JavaScript or Node.js application.
- **ES6 Support**: Built with modern JavaScript (ES6), ensuring compatibility with the latest standards and practices.
- **Lightweight**: Minimal dependencies and a small footprint make this package perfect for projects where efficiency is key.
- **Secure API Key Management**: Keep your FreeCurrencyAPI key secure and avoid exposing it in the codebase.

## Installation

To install `i-convert-currency`, use npm:

```bash
npm install i-convert-currency

## Usage

### Setup

Before you can convert currencies, you need to initialize the package with your FreeCurrencyAPI key:

```javascript
import { initializeAPI } from 'i-convert-currency';

// Initialize with your FreeCurrencyAPI key
initializeAPI('your_api_key_here');

### Converting Currency

Convert currency from one unit to another with ease:

```javascript
import { convertCurrency } from 'i-convert-currency';

async function convertExample() {
  const convertedAmount = await convertCurrency('USD', 'EUR', 100);
  console.log('Converted Amount:', convertedAmount);
}

convertExample();

## API Reference

### `initializeAPI(apiKey)`

- **`apiKey`**: `string` - Your FreeCurrencyAPI key.

Initializes the package with the provided API key. This key is required for accessing real-time exchange rates.

### `convertCurrency(from, to, units)`

- **`from`**: `string` - The source currency code (e.g., 'USD').
- **`to`**: `string` - The target currency code (e.g., 'EUR').
- **`units`**: `number` - The amount in the source currency to be converted.

Returns a `Promise` that resolves to the converted amount in the target currency.

## Example

```javascript
import { initializeAPI, convertCurrency } from 'i-convert-currency';

initializeAPI('your_api_key_here');

convertCurrency('GBP', 'JPY', 50)
  .then((result) => console.log(`50 GBP is approximately ${result} JPY`))
  .catch((error) => console.error('Conversion error:', error));


## License

i-convert-currency is licensed under the [Apache-2.0 License](LICENSE). See the LICENSE file for more details.
