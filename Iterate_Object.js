// 11. Iterate through the properties of an object using a for-in loop.
const insta_profile = {
    username: "@shardha_khapra",
    no_of_posts: 195,
    followers: 569000,
    following: 4,
    bio: `#Entrepreneur,\n\tApna College | Ex-Microsoft, DRDO\n\tTo educate someone is the highest privilege ♥`,
}

for(let key in insta_profile) {
    console.log(`${key}: ${insta_profile[key]}`);
}