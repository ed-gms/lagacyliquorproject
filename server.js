const request = require('request');
const fs = require("fs");
// const originalData = require('./originalData');
const apiKey = require('./apiKey');
  
request(
  `https://lcboapi.com/products?access_key=${apiKey}`,
  { json: true },
  (err, res, body) => {
    if (err) {
      return console.log(err);
    }
    // console.log(body.result);
  }
);

// cleaned-up data
const cleanedUpData = originalData.map(item => {
  const {
    id, name, primary_category, secondary_category, origin, package, package_unit_type, package_unit_volume_in_milliliters, total_package_units, volume_in_milliliters, alcohol_content, producer_name, released_on, tasting_note, image_thumb_url, image_url, varietal, style, tertiary_category, product_no
  } = item;
  return {
    id, name, primary_category, secondary_category, origin, package, package_unit_type, package_unit_volume_in_milliliters, total_package_units, volume_in_milliliters, alcohol_content, producer_name, released_on, tasting_note,image_thumb_url, image_url, varietal, style, tertiary_category, product_no
  };
})
console.log(cleanedUpData);

// Write file
let stringified = JSON.stringify(cleanedUpData);
fs.writeFileSync('cleaned-up_data.json', stringified);