import Freecurrencyapi from '@everapi/freecurrencyapi-js';


let freecurrencyapi;

export function initializeAPI(apiKey) {
  freecurrencyapi = new Freecurrencyapi(apiKey);
}

export async function convertCurrency(from, to, units) {
    try {
        const res = await freecurrencyapi.latest({
            base_currency: from,
            currencies: to,
        });

        if (res && res.data && res.data[to]) {
            const conversionRate = res.data[to];
            const convertedAmount = (conversionRate * units).toFixed(1);
            return convertedAmount;
        } else {
            console.error("Currency conversion data is not available.");
        }
    } catch (error) {
        console.error("Error fetching conversion rate:", error);
    }
}