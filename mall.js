const prompt = require("prompt-sync")();

var Grocery_stores = {
  Grains_Oils_and_Spices: {
    Rice: { Rate: 70, Stock: 20 },
    "Moong Dal": { Rate: 70, Stock: 20 },
    "Toor Dal": { Rate: 70, Stock: 20 },
    Masoor_Dal: { Rate: 70, Stock: 20 },
    Urad_Dal: { Rate: 70, Stock: 20 },
    Chana_Dal: { Rate: 70, Stock: 20 },
    Oil: { Rate: 70, Stock: 20 },
    Salt: { Rate: 70, Stock: 20 },
    Turmeric_Powder: { Rate: 70, Stock: 20 },
    Red_Chili_Powder: { Rate: 70, Stock: 20 },
    Other_Spices: { Rate: 70, Stock: 20 },
    "Chawli/Lobia": { Rate: 70, Stock: 20 },
    Green_Peas: { Rate: 70, Stock: 20 },
    "Rajma/Kidney_Beans": { Rate: 70, Stock: 20 },
    "Matki/Moth_Beans": { Rate: 70, Stock: 20 },
    "Moong_(Whole)": { Rate: 70, Stock: 20 },
    "Masoor_(Whole)": { Rate: 70, Stock: 20 },
    "Chole/Chickpeas": { Rate: 70, Stock: 20 },
    Whole_Wheat_Flour: { Rate: 70, Stock: 20 },
    Besan: { Rate: 70, Stock: 20 },
  },
  Fresh_Produce: {
    Onion: { Rate: 60, Stock: 20 },
    Potato: { Rate: 60, Stock: 20 },
    Vegetables: { Rate: 60, Stock: 20 },
    Fruits: { Rate: 60, Stock: 20 },
    Milk: { Rate: 60, Stock: 20 },
  },
  "Toiletries_&_Cleaning_Agents": {
    Bathing_Soaps: { Rate: 40, Stock: 20 },
    Shampoo: { Rate: 40, Stock: 20 },
    Conditioners: { Rate: 40, Stock: 20 },
    Toothpaste: { Rate: 40, Stock: 20 },
    Shaving_Cream: { Rate: 40, Stock: 20 },
    "Detergent_Soap/Powder": { Rate: 40, Stock: 20 },
    "Dish_Wash_Soap/Liquid": { Rate: 40, Stock: 20 },
    Floor_Cleaner: { Rate: 40, Stock: 20 },
    Toilet_Cleaner: { Rate: 40, Stock: 20 },
    Toilet_Rolls: { Rate: 40, Stock: 20 },
    Sanitizer: { Rate: 40, Stock: 20 },
    "Kitchen_Towels/Tissue_Papers": { Rate: 40, Stock: 20 },
  },
  Miscellaneous: {
    Snacks: { Rate: 55, Stock: 20 },
    Dry_Fruits: { Rate: 55, Stock: 20 },
    Dahi: { Rate: 55, Stock: 20 },
    Cheese: { Rate: 55, Stock: 20 },
    Ice_Cream: { Rate: 55, Stock: 20 },
    Paneer: { Rate: 55, Stock: 20 },
    Papad: { Rate: 55, Stock: 20 },
    Chocolates: { Rate: 55, Stock: 20 },
    Honey: { Rate: 55, Stock: 20 },
    Ready_product: { Rate: 55, Stock: 20 },
    Pooja_Items: { Rate: 55, Stock: 20 },
    Garbage_Bags: { Rate: 55, Stock: 20 },
  },
};

var Restaurants = {
  Indian_Food: {
    Vada_Pao: { Rate: 80, Stock: 20 },
    "Kathi_Roll_Kolkata.": { Rate: 80, Stock: 20 },
    Chole_Bhature: { Rate: 80, Stock: 20 },
    Litti_Choka: { Rate: 80, Stock: 20 },
  },
  Thai_food: {
    Pad_Kra_Prao: { Rate: 100, Stock: 20 },
    Kao_Ka_Moo: { Rate: 100, Stock: 20 },
    Khao_Soi: { Rate: 100, Stock: 20 },
  },
  Chinese: {
    Chowmein: { Rate: 70, Stock: 20 },
    Manchurian: { Rate: 120, Stock: 20 },
    Spicy_Tofu: { Rate: 150, Stock: 20 },
    "Egg-Fried_Rice": { Rate: 250, Stock: 20 },
  },
};

var Clothing_stores = {
  Women_Dresess: {
    "Midi Dress": { Rate: 750, Stock: 20 },
    Off_the_Shoulder: { Rate: 1050, Stock: 20 },
    Shift_Dress: { Rate: 450, Stock: 20 },
    Bodycon_Dress: { Rate: 1500, Stock: 20 },
    "A-Line_Dress": { Rate: 750, Stock: 20 },
    Mini_Dress: { Rate: 2000, Stock: 20 },
  },
  Male: {
    "White_Button-Down_Shirt": { Rate: 2500, Stock: 20 },
    Dark_Denim_Jeans: { Rate: 2000, Stock: 20 },
  },
};

const custumber_buy = {};
var balance = 20000;

function billing() {
  console.table(custumber_buy);
  let Total = 0;
  for (let i in custumber_buy) {
    Total = Total + custumber_buy[i];
  }
  console.log(`Total amount ${Total}`);
}

function conselt(shop, slotnum) {
  console.log(`press 1 for buy again
press 2 for exit from this slot
press 3 for exit from this shop
press 4 for Show your stock`);
  let inp = parseFloat(prompt("enter your choice"));
  if (inp == 1) {
    product(shop, slotnum);
  } else if (inp == 2) {
    buy(shop);
  } else if (inp == 3) {
    mall();
  } else if (inp) {
    billing();
    mall();
  }
}

function item(shop, slotnum, num, slot,Quntity) {
  let cheker = 1;
  for (let i in shop[slotnum]) {
    if (cheker == num) {
      if (i in custumber_buy) {
        if (balance >= (shop[slotnum][i]["Rate"]*Quntity)) {
          balance = balance - shop[slotnum][i]["Rate"];
          custumber_buy[i] =
            shop[slotnum][i]["Rate"] * Quntity;
          shop[slotnum][i]["Stock"] = shop[slotnum][i]["Stock"] - Quntity;
        } else {
          console.log();
          console.log(
            `your amount not enoght able to by (Remain amount = ${balance})`
          );
          console.log();
          mall();
        }
      } else {
        if (balance >= (shop[slotnum][i]["Rate"]*Quntity)) {
          balance = balance - shop[slotnum][i]["Rate"];
          custumber_buy[i] = shop[slotnum][i]["Rate"]*Quntity;
          shop[slotnum][i]["Stock"] = shop[slotnum][i]["Stock"] - Quntity;
        } else {
          console.log();
          console.log(
            `your amount not enoght able to by (Remain amount = ${balance})`
          );
          console.log();
          mall();
        }
      }

      cheker += 1;
    } else {
      cheker += 1;
    }
  }
  conselt(shop, slot);
}

function product(shop, slot) {
  let chek = 1;
  let co = 1;
  for (let i in shop) {
    if (chek == slot) {
      for (let j in shop[i]) {
        console.log(
          co,
          j,
          `Rate = ${shop[i][j]["Rate"]}, Stock = ${shop[i][j]["Stock"]}`
        );
        co = co + 1;
        var x = i;
        chek += 1;
      }
    } else {
      chek += 1;
    }
  }
  let requiest2 = parseInt(prompt("enter what you want to buy "));
  let Quntity= parseInt(prompt('Enter how much Quntity do you want'))
  item(shop, x, requiest2, slot,Quntity);
}
{
}

function buy(shop) {
  let co = 1;
  for (let i in shop) {
    console.log(co, i);
    co += 1;
  }
  console.log("");
  let requiest1 = parseInt(prompt("What's your choice"));
  product(shop, requiest1);
}

function mall() {
  let arr = [
    "Grocery_stores",
    "Restaurants",
    "Clothing_stores",
    "press 4 for Biling",
  ];
  let count = 1;
  for (let i of arr) {
    console.log(count, i);
    count += 1;
  }
  let requiest = parseInt(prompt("ente what's shope your want"));
  if (requiest == 1) {
    buy(Grocery_stores);
  } else if (requiest == 2) {
    buy(Restaurants);
  } else if (requiest == 3) {
    buy(Clothing_stores);
  } else if (requiest == 3) {
    billing();
  }
}

console.log(`Welcome to our Mall`);
mall();
// console.log(custumber_buy);
