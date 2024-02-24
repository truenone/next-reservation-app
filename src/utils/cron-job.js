// Server Side
const cron = require('node-cron');

const cronExpression = '* * * * *';

const task = async () => {
    const res = await fetch(`${process.env.API}/getItemPrices`);
    const prices = await res.json();

    const resStatus = await setPrices(prices);


    switch (resStatus) {
        case 200:
            console.log('Ürün fiyatları başarıyla güncellendi');
            break;
        case 500:
            console.log('Ürün fiyatları güncellenirken bir hata oluştu');
        default:
            console.log('Beklenmedik bir hata oluştu.')
            break;
    }
};


async function setPrices(prices) {
    const res = await fetch(`${process.env.API}/setItemPrices`, {
        body: prices
    });

    const prices = await res.json()

    return res.status;
}

cron.schedule(cronExpression, task);