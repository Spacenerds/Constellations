DROP TABLE IF EXISTS images CASCADE;



CREATE TABLE IF NOT EXISTS products (
    id serial primary key,
    title text,
    price integer,
    product_id integer
    
);

CREATE TABLE IF NOT EXISTS images (
    id serial primary key,
    img text,
    img_id integer
     
);

INSERT INTO products (title, price, product_id)
VALUES ('SoundLink Mini Bluetooth speaker II', 179.95, 1),
('SoundSport Pulse wireless headphones', 199.95, 2),
('SoundLink Color Bluetooth speaker II', 129.95, 3),
('Wave system IV', 499.95, 4);

INSERT INTO images ( img, img_id)
VALUES ('https://assets.bose.com/content/dam/Bose_DAM/Web/consumer_electronics/global/products/speakers/soundlink_mini_ii/product_silo_images/soundlink_mini_II_carbon_EC.psd/_jcr_content/renditions/cq5dam.web.320.320.png', 1),
('https://assets.bose.com/content/dam/Bose_DAM/Web/consumer_electronics/global/products/headphones/sspw_product_page/product_silo_images/soundsport_pulse_wireless_EC_hero.psd/_jcr_content/renditions/cq5dam.web.320.320.png', 2),
('https://assets.bose.com/content/dam/Bose_DAM/Web/consumer_electronics/global/products/speakers/soundlink_color_ii/product_silo_images/soundlink_color_ii_blue_EC.psd/_jcr_content/renditions/cq5dam.web.320.320.png', 3),
('https://assets.bose.com/content/dam/Bose_DAM/Web/consumer_electronics/global/products/speakers/wave_music_system_iv/product_silo_images/WMS_IV_black_EC_hero.psd/_jcr_content/renditions/cq5dam.web.320.320.png', 4);
