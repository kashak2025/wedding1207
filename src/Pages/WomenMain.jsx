import { useState } from 'react';
import Card from '../Components/Card';
import { Box, Container } from '@mui/material';
import Fam from '../Images/image1.jpg'
const WomenMain = () => {
  let [current, setCurrent] = useState('items');
  let data = [
    { id: 1,  title: "Doe Gown With A Long Cape In Sequins Embroidery, Crafted In Sleeveless.", price: 39000, product: "Gown", image: 'https://staticm247.kalkifashion.com/media/tagalys/product_images/d/o/doeskin_cream_gown_in_sequins_embroidery-m001ra631y-sg95951_5_.jpg', rating: { rate: 3.9, count: 120 } },
    { id: 2,  title: "Wine Purple Embroidered Gown In Sequins", price: 22.3, product: "Gown", image: "https://staticm247.kalkifashion.com/media/catalog/product/e/g/eggplant_purple_embroidered_gown-sg128114_2_.jpg?w=1200", rating: { rate: 4.1, count: 259 } },
    { id: 3,  title: "Lilac Sequin Gown With Attached Cheeta Work Cape Sleeves.", price: 55.99, product: "Gown", image: "https://staticm247.kalkifashion.com/media/tagalys/product_images/l/i/lilac_sequin_gown_with_attached_cheeta_work_cape-sg269765_5_.jpg", rating: { rate: 4.7, count: 500 } },
    { id: 4,  title: "Frappe Mermaid Gown In Cut Dana Dangling Tassels On The Shoulder", price: 15.99, product: "Gown", image: "https://staticm247.kalkifashion.com/media/tagalys/product_images/f/r/frappe_mermaid_gown_in_cut_dana_dangling-m001i18y-sg101083_2_.jpg", rating: { rate: 2.1, count: 430 } },
    { id: 5,  title: "Brown Organza Gown In Sleeveless With Sequins Embroidery", price: 695, product: "Gown", image: "https://staticm247.kalkifashion.com/media/tagalys/product_images/b/r/brown_organza_gown-m001ra686y-sg102038.jpg", rating: { rate: 4.6, count: 400 } },
    { id: 6,  title: "Oyster Organza Gown With Wide Sleeves, Fabricated In Tissue Organza.", price: 168, product: "Gown", image: "https://staticm247.kalkifashion.com/media/tagalys/product_images/o/y/oyster_organza-m001m645y-sg102062_13_.jpg", rating: { rate: 3.9, count: 70 } },
    { id: 7,  title: "Blue Fish Cut Ombre Trail Embroidered BodyCon Gown.", price: 9.99, product: "Gown", image: "https://staticm247.kalkifashion.com/media/tagalys/product_images/b/l/blue_fish_cut_ombre_trail_embroidered_gown-sg226260.jpg", rating: { rate: 3, count: 400 } },
    { id: 8,  title: "Onion Pink Gown In Georgette With Cut Dana Embroidery.", price: 10.99, product: "Gown", image: "https://staticm247.kalkifashion.com/media/tagalys/product_images/o/n/onion_pink_gown_in_georgette_with_cut-sg160137_2_.jpg", rating: { rate: 1.9, count: 100 } },
    { id: 9,  title: "Fern Green Gown In Net With Geometric Hand Embroidery And Organza.", price: 64, product: "Gown", image: "https://staticm247.kalkifashion.com/media/tagalys/product_images/f/e/fern_green_gown_in_net_with_geometric_hand_embroidery-m001tr411y-sg81208.jpg", rating: { rate: 3.3, count: 203 } },
    { id: 10,  title: "Mehreen In Kalki Burgundy Gown In Embellished Net With Fancy.", price: 109, product: "Gown", image: "https://staticm247.kalkifashion.com/media/tagalys/product_images/m/e/mehreen_in_kalki_burgundy_gown_in_embellished_net_with_fancy_cut_out_back_3_.jpg", rating: { rate: 2.9, count: 470 } },
    { id: 11,  title: "Turq Blue Flared Anarkali Kurti In Silk With Multicolor Print", price: 109, product: "Gown", image: "https://staticm247.kalkifashion.com/media/tagalys/product_images/p/r/printed_scuba_blue-flared_anarkali_gown_in_silk_with_multico-sg131157_2_.jpg", rating: { rate: 4.8, count: 319 } },
    { id: 12,  title: "Off White Pallu Style Draped Anarkali Suit With Fancy", price: 114, product: "Gown", image: "https://staticm247.kalkifashion.com/media/tagalys/product_images/o/f/off_white_pallu_style_draped_anarkali_suit_-sg261578_1_.jpg", rating: { rate: 4.8, count: 400 } },
    { id: 13,  title: "Off White Gown In Georgette With Tiered Flare And Hand Embroidered Leaf ", price: 599, product: "Gown", image: "https://staticm247.kalkifashion.com/media/tagalys/product_images/o/f/off-white-gown-in-georgette-with-tiered-flare-and-hand-embroidered-leaf-motifs-on-the-bodice-online-kalki-fashion-m001g3015y-sg73163_2_.jpg", rating: { rate: 2.9, count: 250 } },
    { id: 14,  title: "Bottle Green Gown In Crepe With Side Cut Outs In The Hand Embroidered Bodice  ", price: 999.99, product: "Gown", image: "https://staticm247.kalkifashion.com/media/tagalys/product_images/b/o/bottle-green-gown-in-crepe-with-side-cut-outs-in-the-hand-embroidered-bodice-online-kalki-fashion-m001g3011y-sg73164_5_.jpg", rating: { rate: 2.2, count: 140 } },
    { id: 15,  title: "Lavender Purple Ball Gown In Organza With Ruffle Frills And Embroidery", price: 56.99, product: "Gown", image: "https://staticm247.kalkifashion.com/media/tagalys/product_images/a/s/ashley_blue_ball_gown_in_organza_with_ruffle-sg118217_2_.jpg", rating: { rate: 2.6, count: 235 } },
    { id: 16,  title: "Wine Sequins Embroidered Evening Gown In Georgette With Resham Work", price: 29.95, product: "Gown", image: "https://staticm247.kalkifashion.com/media/tagalys/product_images/p/e/persian_red_sequins_embellished_gown_with_sheer_net-sg95949_2_.jpg", rating: { rate: 2.9, count: 340 } },




    { id: 17,  title: "Orange Embroidered Organza Lehenga Choli Set With Fancy", price: 39.99, product: "choli", image: "https://staticm247.kalkifashion.com/media/tagalys/product_images/o/r/orange_embroidered_organza_lehenga_choli_set-sg236665_5_.jpg", rating: { rate: 3.8, count: 679 } },
    { id: 18,  title: "Multi Color Organza Embroidered Mirror Work With Fancy", price: 9.85, product: "choli", image: "https://i.pinimg.com/control/564x/98/d1/33/98d1335f3b25c2726ed17061cf05aa98.jpg", rating: { rate: 4.7, count: 130 } },
    { id: 19,  title: "Lime Green Embroidered Georgette Lehenga Choli Set", price: 7.95, product: "choli", image: "https://staticm247.kalkifashion.com/media/tagalys/product_images/l/i/lime_green_embroidered_georgette_lehenga_choli_set-sg238965_6_.jpg", rating: { rate: 4.5, count: 146 } },
    { id: 20,  title: "Black Embroidered Ombre Lehenga Choli Set With Fancy", price: 12.99, product: "choli", image: "https://staticm247.kalkifashion.com/media/tagalys/product_images/b/l/black_embroidered_ombre_lehenga_choli_set-sg237926_7_.jpg", rating: { rate: 3.6, count: 145 } },
    { id: 21,  title: "Green Printed Lehenga Choli With Embroidered Jacket with fancy look", price: 39.99, product: "choli", image: "https://staticm247.kalkifashion.com/media/tagalys/product_images/g/r/green_printed_lehenga_choli_with_embroidered_jacket-sg235435_7_.jpg", rating: { rate: 3.8, count: 679 } },
    { id: 22,  title: "Light Pink Lehenga Choli With Multi Colored 3D Embroidered Kalis In Floral", price: 9.85, product: "choli", image: "https://staticm247.kalkifashion.com/media/tagalys/product_images/o/y/oyster_royal_heritage_lehenga_and_choli_with_detailed_hand_embroidered_floral-sg10_4_.png", rating: { rate: 4.7, count: 130 } },
    { id: 23,  title: "Orange Lehenga With Cut Dana Embroidery On The Choli", price: 7.95, product: "choli", image: "https://staticm247.kalkifashion.com/media/tagalys/product_images/o/r/orange_lehenga_with_cut_dana_embroidery_on_the_choli-sg102154_5_.jpg", rating: { rate: 4.5, count: 146 } },
    { id: 24,  title: "Lime Green Embroidered Georgette Lehenga Choli Set", price: 12.99, product: "choli", image: "https://staticm247.kalkifashion.com/media/tagalys/product_images/l/i/lime_green_embroidered_georgette_lehenga_choli_set-sg238965_6_.jpg", rating: { rate: 3.6, count: 145 } },
    { id: 25,  title: "Oyster Royal Heritage Lehenga And Choli With Detailed Hand.", price: 39.99, product: "choli", image: "https://staticm247.kalkifashion.com/media/tagalys/product_images/o/y/oyster_royal_heritage_lehenga_and_choli_with_detailed_hand_embroidered-sg102030.jpg", rating: { rate: 3.8, count: 679 } },
    { id: 26,  title: "Melon Peach Ombre Lehenga Embellished In Sequins With Fancy ", price: 9.85, product: "choli", image: "https://staticm247.kalkifashion.com/media/tagalys/product_images/m/e/melon-peach-ombre-lehenga-in-sequins-fabric-with-moti-embroidered-crop-top-with-illusion-neckline-and-full-sleeves-m001ra425y-sg56191_6_.jpg", rating: { rate: 4.7, count: 130 } },
    { id: 27,  title: "Gold Pre Pleated Lehenga With Choker Dupatta With Fancy", price: 7.95, product: "choli", image: "https://staticm247.kalkifashion.com/media/tagalys/product_images/g/o/gold_pre_pleated_lehenga_with_choker_dupatta-sg207230_5_.jpg", rating: { rate: 4.5, count: 146 } },
    { id: 28,  title: "Light Pink Lehenga Set With A Choli In Moti Embroidery With Fancy", price: 12.99, product: "choli", image: "https://staticm247.kalkifashion.com/media/tagalys/product_images/l/i/light_pink_lehenga_set_with_a_choli_in_moti_embroidery_crop_top_comes-sg102028_9_.jpg", rating: { rate: 3.6, count: 145 } },
    { id: 29,  title: "Bride And Baraat Apple Red Fully Embroidered Lavish Lehenga Choli With Belt", price: 39.99, product: "choli", image: "https://staticm247.kalkifashion.com/media/tagalys/product_images/k/a/kalki_bride_baraat_tango_red_fully-sg107738_9_.jpg", rating: { rate: 3.8, count: 679 } },
    { id: 30,  title: "Rouge Red Bridal Lehenga Set In Raw Silk With Aari And Zardosi Work.", price: 9.85, product: "choli", image: "https://staticm247.kalkifashion.com/media/tagalys/product_images/r/o/rouge_red_bridal_lehenga_set_in_raw_silk_with_aari-sg154658_13_.jpg", rating: { rate: 4.7, count: 130 } },
    { id: 31,  title: "Bridal Khwabeeda Beige White Lehenga Set In Foil Organza  With Fancy", price: 7.95, product: "choli", image: "https://staticm247.kalkifashion.com/media/tagalys/product_images/b/r/bridal_khwabeeda_beige_white_lehenga-sg127974_5_.jpg", rating: { rate: 4.5, count: 146 } },
    { id: 32,  title: "Dark Red Lehenga With A Crop Top In Royal Heritage With Fancy", price: 12.99, product: "choli", image: "https://staticm247.kalkifashion.com/media/tagalys/product_images/d/a/dark_red_lehenga_with_a_crop_top-sg102157_-1_2_.jpg", rating: { rate: 3.6, count: 145 } },




    { id: 33,  title: "Orangish Gold Zari Chanderi Silk Saree With Unstitched Blouse", price: 39.99, product: "saree", image: "https://staticm247.kalkifashion.com/media/tagalys/product_images/o/r/orangish_gold_zari_chanderi_silk_saree_with_unstitched_blous-sg213341_6_.jpg", rating: { rate: 3.8, count: 679 } },
    { id: 34,  title: "Pink Organza Saree With Cutdana Work Sequins Border Pallu With Fancy", price: 9.85, product: "saree", image: "https://staticm247.kalkifashion.com/media/tagalys/product_images/p/i/pink_organza_saree_with_cutdana_work_sequins_border_pallu_an-sg220468_8_.jpg", rating: { rate: 4.7, count: 130 } },
    { id: 35,  title: "Orange Embroidered Organza Saree With Floral Print And Scallop Borders.", price: 7.95, product: "saree", image: "https://staticm247.kalkifashion.com/media/tagalys/product_images/o/r/orange_embroidered_organza_saree_with-sg157610_6_.jpg", rating: { rate: 4.5, count: 146 } },
    { id: 36,  title: "Peach Embroidered Saree With Unstitched Blouse With Fancy", price: 12.99, product: "saree", image: "https://staticm247.kalkifashion.com/media/tagalys/product_images/p/e/peach_embroidered_saree_with_unstitched_blouse-sg212386_7_.jpg", rating: { rate: 3.6, count: 145 } },
    { id: 37,  title: "Black Saree With Kashmiri Thread Work And Unstitched Blouse Piece", price: 39.99, product: "saree", image: "https://staticm247.kalkifashion.com/media/tagalys/product_images/b/l/black_saree_with_kashmiri-sg181611_7_.jpg", rating: { rate: 3.8, count: 679 } },
    { id: 38,  title: "Onion Pink Banarasi Tunchui Silk Saree With Tassels And With Fancy", price: 9.85, product: "saree", image: "https://staticm247.kalkifashion.com/media/tagalys/product_images/o/n/onion_pink_banarasi_tunchui_silk_saree_with_tassels_and_unst-sg212913_7_.jpg", rating: { rate: 4.7, count: 130 } },
    { id: 39,  title: "Purple Embroidered Organza Saree With Unstitched Blouse", price: 7.95, product: "saree", image: "https://staticm247.kalkifashion.com/media/tagalys/product_images/p/u/purple_embroidered_organza_saree_with_unstitched_blouse-sg227237_9_.jpg", rating: { rate: 4.5, count: 146 } },
    { id: 40,  title: "Grey Glass Tissue Saree With Mirror Work Border And Unstitched Blouse Piece.", price: 12.99, product: "saree", image: "https://staticm247.kalkifashion.com/media/tagalys/product_images/g/r/grey_glass_tissue_saree_with_mirror_work_border_and_unstitched-sg187290_7_.jpg", rating: { rate: 3.6, count: 145 } },
    { id: 41,  title: "Elegant Sea Blue Saree With Resham Thread Artistry", price: 39.99, product: "saree", image: "https://staticm247.kalkifashion.com/media/tagalys/product_images/e/l/elegant_sea_blue_saree_with_resham_thread_artistry-sg214129_6_.jpg", rating: { rate: 3.8, count: 679 } },
    { id: 42,  title: "Mauve Tissue Saree In White Moti And Cut Dana Embroidery Buttis ", price: 9.85, product: "saree", image: "https://staticm247.kalkifashion.com/media/tagalys/product_images/m/a/mauve_tissue_saree_in_white_moti_and_cut_dana_embroidery-k073272906y-sg99252_2_.jpg", rating: { rate: 4.7, count: 130 } },
    { id: 43,  title: "Blue Satin Saree With Printed Detail And Unstitched Blouse Piece", price: 7.95, product: "saree", image: "https://staticm247.kalkifashion.com/media/tagalys/product_images/b/l/blue_satin_saree_with_printed_detail_and_unstitched_blouse_p-sg182295_9_.jpg", rating: { rate: 4.5, count: 146 } },
    { id: 44,  title: "Brown Glass Tissue Saree In Swarovski With Unstitched Blouse", price: 12.99, product: "saree", image: "https://staticm247.kalkifashion.com/media/tagalys/product_images/b/r/brown_glass_tissue_saree_in_swarovski_with_unstitched_blouse-sg220461_7_.jpg", rating: { rate: 3.6, count: 145 } },
    { id: 45,  title: "Golden Silk Saree With Exquisite Resham Thread Butti Work", price: 39.99, product: "saree", image: "https://staticm247.kalkifashion.com/media/tagalys/product_images/g/o/golden_silk_saree_with_exquisite_resham_thread_butti_work-sg214157_2_.jpg", rating: { rate: 3.8, count: 679 } },
    { id: 46,  title: "Black Silk Saree In Butta Work With Unstitched Blouse", price: 9.85, product: "saree", image: "https://staticm247.kalkifashion.com/media/tagalys/product_images/b/l/black_silk_saree_in_butta_work_with_unstitched_blouse-sg227296_10_.jpg", rating: { rate: 4.7, count: 130 } },
    { id: 47,  title: "Gold Beige Saree In Zari Kota Silk With Hand Embroidered", price: 7.95, product: "saree", image: "https://staticm247.kalkifashion.com/media/tagalys/product_images/g/o/gold_beige_saree_in_zari_kota_silk_with_hand_embroidered_floral_jaal_using_resham_threads_online_-_kalki_fashion_3__1.jpg", rating: { rate: 4.5, count: 146 } },
    { id: 48,  title: "Black Net Saree With Floral Threadwork And Unstitched Blouse Piece", price: 12.99, product: "saree", image: "https://staticm247.kalkifashion.com/media/tagalys/product_images/b/l/black_net_saree_with_floral_threadwork_and_unstit-sg174305.jpg", rating: { rate: 5, count: 145 } },




    { id: 49,  title: "Pink Printed Pashmina Kurta With Fancy Set For Men's ", price: 39.99, product: "kurta", image: "https://staticm247.kalkifashion.com/media/tagalys/product_images/p/i/pink_printed_pashmina_kurta_set_for_men-sg253991_7_.jpg", rating: { rate: 3.8, count: 679 } },
    { id: 50,  title: "Black Silk Kurta Set With Resham Work For With Fancy ", price: 9.85, product: "kurta", image: "https://staticm247.kalkifashion.com/media/catalog/product/b/l/black_silk_kurta_set_with_resham_work_for_men-sg244633_2_.jpg?w=400", rating: { rate: 4.7, count: 130 } },
    { id: 51,  title: "Green Tussar Silk Print With Fancy Kurta's And Pyjama", price: 7.95, product: "kurta", image: "https://staticm247.kalkifashion.com/media/catalog/product/g/r/green_tussar_silk_print_kurta_and_pyjama-sg254112_5_.jpg?w=400", rating: { rate: 4.5, count: 146 } },
    { id: 52,  title: "Cream Printed Kurta With Fancy Patiala style For Men", price: 12.99, product: "kurta", image: "https://staticm247.kalkifashion.com/media/tagalys/product_images/c/r/cream_printed_kurta_with_patiala_for_men-sg246279_7_.jpg", rating: { rate: 3.6, count: 145 } },
    { id: 53,  title: " Mustard Tussar Silk Abstract Print Kurta And Pyjama ", price: 39.99, product: "kurta", image: "https://staticm247.kalkifashion.com/media/catalog/product/m/u/mustard_tussar_silk_abstract_print_kurta_and_pyjama-sg254120_5_.jpg?w=400", rating: { rate: 3.8, count: 679 } },
    { id: 54,  title: "Green Printed Kurta Set With Resham Work For With Fancy", price: 9.85, product: "kurta", image: "https://staticm247.kalkifashion.com/media/tagalys/product_images/g/r/green_printed_kurta_for_men-sg246655_7_.jpg", rating: { rate: 4.7, count: 130 } },
    { id: 55,  title: "Pink Silk Printed Kurta Set With Resham Work For Men", price: 7.95, product: "kurta", image: "https://staticm247.kalkifashion.com/media/tagalys/product_images/p/i/pink_printed_silk_kurta_set_for_men-sg254039_5_.jpg", rating: { rate: 4.5, count: 146 } },
    { id: 56,  title: "Beige Satin Printed Kurta with fancy style Set For Men", price: 12.99, product: "kurta", image: "https://staticm247.kalkifashion.com/media/tagalys/product_images/b/e/beige_satin_printed_kurta_set_for_men-sg246455_5_.jpg", rating: { rate: 3.6, count: 145 } },
    { id: 57,  title: " Blue Abla Work Kurta and Pyjama with fancy style Set For Men", price: 39.99, product: "kurta", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc2vAnnOC6jEY8u1xu40vYuZgEck8tjuh0HaG52-s-dOkMNPPc4GV9Dmv1Y2I2iL1OV7E&usqp=CAU", rating: { rate: 3.8, count: 679 } },
    { id: 58,  title: "Pink Amil fancy Kurta and Pyjama wore by Kartik Aryan", price: 9.85, product: "kurta", image: "https://www.anitadongre.com/dw/image/v2/BGCX_PRD/on/demandware.static/-/Sites-masterCatalog_AD_India/default/dw4e55fa42/images/hires/FW22/F22K15CS_Pink_Celeb_1.jpg?sw=1300&sh=1950&sm=fit", rating: { rate: 4.7, count: 130 } },
    { id: 59,  title: "Passionate and Obstematic SunBlack Kurta Full Fits Kurta for Mens.", price: 7.95, product: "kurta", image: "https://i.pinimg.com/736x/6a/ca/a4/6acaa4d16c4ed074a9aa9d068db1d4cd.jpg", rating: { rate: 4.5, count: 146 } },
    { id: 60,  title: "Navy Blue Embroidered Silk Kurta Set For Men", price: 12.99, product: "kurta", image: "https://staticm247.kalkifashion.com/media/tagalys/product_images/n/a/navy_blue_embroidered_silk_kurta_set_for_men-sg229158_5_.jpg", rating: { rate: 3.6, count: 145 } },
    { id: 61,  title: "Yellow Kurta Pyjama With Resham Work with fancy style For Men", price: 39.99, product: "kurta", image: "https://staticm247.kalkifashion.com/media/tagalys/product_images/y/e/yellow_kurta_pyjama_with_resham_work_for_men-sg226101_5_.jpg", rating: { rate: 3.8, count: 679 } },
    { id: 62,  title: "Wine Patola Printed Kurta Jacket Set  with fancy style For Men", price: 9.85, product: "kurta", image: "https://staticm247.kalkifashion.com/media/tagalys/product_images/w/i/wine_printed_kurta_jacket_set_for_men-sg227836_3_.jpg", rating: { rate: 4.7, count: 130 } },
    { id: 63,  title: "Grey Silk Kurta Jacket Set With Mirror Work with fancy style For Men", price: 7.95, product: "kurta", image: "https://staticm247.kalkifashion.com/media/tagalys/product_images/g/r/grey_silk_kurta_jacket_set_with_mirror_work_for_men-sg229214_6_.jpg", rating: { rate: 4.5, count: 146 } },
    { id: 64,  title: "Steel Grey Kurta With Cutdana Embroidered Jacket Set For Men", price: 12.99, product: "kurta", image: "https://staticm247.kalkifashion.com/media/tagalys/product_images/s/t/steel_grey_kurta_with_cutdana_embroidered_jacket_set-sg228198_5_.jpg", rating: { rate: 5, count: 145 } },




    {id: 65, title: "Tan Brown Silk Sherwani Set In Zari And Sequins Embroidery",price: 39.99,product: "sherwani",image: "https://staticm247.kalkifashion.com/media/tagalys/product_images/s/t/stucco_beige_silk_sherwani_set_in_zari-sg132295_2_.jpg",rating: {  rate: 3.8,  count: 679}},
    {id: 66, title: "Blue Silk Sherwani With Pashmina Dupatta for men",price: 9.85,product: "sherwani",image: "https://staticm247.kalkifashion.com/media/tagalys/product_images/b/l/blue_silk_sherwani_with_pashmina_dupatta-sg219250_1_.jpg",rating: {  rate: 4.7,  count: 130}},
    {id: 67, title: "Black Embroidered Indo-Western Sherwani Set In Imported Suiting Fabric",price: 7.95,product: "sherwani",image: "https://staticm247.kalkifashion.com/media/tagalys/product_images/b/l/black_embroidered_indo-western-sg129765_2_.jpg",rating: {  rate: 4.5,  count: 146}},
    {id: 68, title: "Gold Raw Silk Sherwani Suit With Hand Work for men",price: 12.99,product: "sherwani",image: "https://staticm247.kalkifashion.com/media/tagalys/product_images/g/o/gold_raw_silk_sherwani_suit_with_hand_work-sg252175_6_.jpg",rating: {  rate: 3.6,  count: 145}},
    {id: 69, title: "Ivory Embroidered Sherwani Suit With Dori Work with fancy style",price: 39.99,product: "sherwani",image: "https://staticm247.kalkifashion.com/media/tagalys/product_images/i/v/ivory_embroidered_sherwani_suit_with_dori_work-sg234541_7_.jpg",rating: {  rate: 3.8,  count: 679}},
    {id: 70, title: "Powder Blue Silk Sherwani Set In Zari And Sequins Embroidery",price: 9.85,product: "sherwani",image: "https://staticm247.kalkifashion.com/media/tagalys/product_images/b/a/baby_blue_silk_sherwani_set_in_zari-sg127834_2_.jpg",rating: {  rate: 4.7,  count: 130}},
    {id: 71, title: "Black Floral Thread Embroidered Sherwani For Men",price: 7.95,product: "sherwani",image: "https://staticm247.kalkifashion.com/media/tagalys/product_images/b/l/black_floral_thread_embroidered_sherwani_for_men-sg228334_6_.jpg",rating: {  rate: 4.5,  count: 146}},
    {id: 72, title: "Dark Green Moti Embroidered Sherwani For Men",price: 12.99,product: "sherwani",image: "https://staticm247.kalkifashion.com/media/tagalys/product_images/d/a/dark_green_moti_embroidered_sherwani_for_men-sg228382_5_.jpg",rating: {  rate: 3.6,  count: 145}},
    {id: 73, title: "Wine Cutdana Embroidered Sherwani For Men",price: 39.99,product: "sherwani",image: "https://staticm247.kalkifashion.com/media/tagalys/product_images/w/i/wine_cutdana_embroidered_sherwani-sg241676_7_.jpg",rating: {  rate: 3.8,  count: 679}},
    {id: 74, title: "White Raw Silk Embroidered Sherwani Set for men",price: 9.85,product: "sherwani",image: "https://staticm247.kalkifashion.com/media/tagalys/product_images/w/h/white_raw_silk_embroidered-sg196195_12_.jpg",rating: {  rate: 4.7,  count: 130}},
    {id: 75, title: "Champagne Brown Embroidered Silk Sherwani Set",price: 7.95,product: "sherwani",image: "https://staticm247.kalkifashion.com/media/tagalys/product_images/b/i/birch_white_embroidered_silk_sherwani-sg142622_2_.jpg",rating: {  rate: 4.5,  count: 146}},
    {id: 76, title: "Black Jodhpuri Suit With Textured Bandhgala",price: 12.99,product: "sherwani",image: "https://staticm247.kalkifashion.com/media/catalog/product/b/l/black_textured_bandhgala_and_pant-sg171662_3_.jpg?w=400",rating: {  rate: 3.6,  count: 145}},
    {id: 77, title: "Blue Self Embroidered Sherwani with fancy style For Men",price: 39.99,product: "sherwani",image: "https://staticm247.kalkifashion.com/media/tagalys/product_images/b/l/blue_self_embroidered_sherwani_for_men-sg233125_13_.jpg",rating: {  rate: 3.8,  count: 679}},
    {id: 78, title: "Pista Green Sherwani Set In Raw Silk With Moti, Cut Dana, And Thread Embroidery",price: 9.85,product: "sherwani",image: "https://staticm247.kalkifashion.com/media/tagalys/product_images/p/i/pista_green-sg142856_2_.jpg",rating: {  rate: 4.7,  count: 130}},
    {id: 79, title: "Beige White Embroidered Raw Silk Sherwani Set",price: 7.95,product: "sherwani",image: "https://staticm247.kalkifashion.com/media/catalog/product/e/g/egret_white_embroidered_raw_silk_sherwani-sg139798_2_.jpg?w=800",rating: {  rate: 4.5,  count: 146}},
    {id: 80, title: "Pink Silk Embroidered Sherwani Set With Dupatta",price: 12.99,product: "sherwani",image: "https://staticm247.kalkifashion.com/media/catalog/product/p/i/pink_silk_embroidered_sherwani_set_with_dupatta-sg251311_6_.jpg?w=400",rating: {  rate: 5,  count: 145}},

    


    {id: 81, title: "Kalki Fiery Red Printed Kurti And Palazzo Set In Silk For Girls",price: 39.99,product: "kurti",image: "https://staticm247.kalkifashion.com/media/tagalys/product_images/k/a/kalki_fiery_red_printed-sg155563_2_.jpg",rating: {  rate: 3.8,  count: 679}},
    {id: 82, title: "Kalki Cream White Printed Kurti And Palazzo Set In Georgette For Girls",price: 9.85,product: "kurti",image: "https://staticm247.kalkifashion.com/media/tagalys/product_images/k/a/kalki_cream_white_printed-sg155570_2_.jpg",rating: {  rate: 4.7,  count: 130}},
    {id: 83, title: "Kalki Mustard Yellow Printed Silk Kurti And Palazzo Set For Girls",price: 7.95,product: "kurti",image: "https://staticm247.kalkifashion.com/media/tagalys/product_images/k/a/kalki_mustard_yellow_printed_silk_kurti-sg157532_2_.jpg",rating: {  rate: 4.5,  count: 146}},
    {id: 84, title: "Kalki Olive Green Printed Kurti And Palazzo Set In Silk For Girls",price: 12.99,product: "kurti",image: "https://staticm247.kalkifashion.com/media/tagalys/product_images/k/a/kalki_olive_green_printed_kurti-sg155564_2_.jpg",rating: {  rate: 3.6,  count: 145}},
    {id: 85, title: "Kalki Mustard Yellow Printed Kurti And Sharara Set In Georgette For Girls",price: 39.99,product: "kurti",image: "https://staticm247.kalkifashion.com/media/tagalys/product_images/k/a/kalki_mustard_yellow_printed_kurti-sg161745_2_.jpg",rating: {  rate: 3.8,  count: 679}},
    {id: 86, title: "Kalki Forest Green Embroidered Top And Palazzo Set With Jacket In Georgette For Girls",price: 9.85,product: "kurti",image: "https://staticm247.kalkifashion.com/media/tagalys/product_images/k/a/kalki_forest_green-sg161465_5_.jpg",rating: {  rate: 4.7,  count: 130}},
    {id: 87, title: "Kalki Carrot Orange Top And Lehenga Set In Cotton Silk For Girls",price: 7.95,product: "kurti",image: "https://staticm247.kalkifashion.com/media/tagalys/product_images/k/a/kalki_carrot_orange_top_and_lehenga-sg162123_2_.jpg",rating: {  rate: 4.5,  count: 146}},
    {id: 88, title: "Kalki Peacock Blue Printed Kurta And Sharara Set In Georgette For Girls",price: 12.99,product: "kurti",image: "https://staticm247.kalkifashion.com/media/tagalys/product_images/k/a/kalki_peacock_blue-sg161509_2_.jpg",rating: {  rate: 3.6,  count: 145}},
    {id: 89, title: "Kalki Multicolor Embroidered Skirt And Top Set In Satin Blend For Girls ",price: 39.99,product: "kurti",image: "https://staticm247.kalkifashion.com/media/tagalys/product_images/k/a/kalki_multicolor_embroidered_skirt_and_top_set-sg156614_2_.jpg",rating: {  rate: 3.8,  count: 679}},
    {id: 90, title: "Kalki Powder Blue Embroidered Lehenga Set In Georgette For Girls",price: 9.85,product: "kurti",image: "https://staticm247.kalkifashion.com/media/tagalys/product_images/k/a/kalki_powder_blue_embroidered_lehenga_set-sg155555_2_.jpg",rating: {  rate: 4.7,  count: 130}},
    {id: 91, title: "Kalki Multi Colored Top And Skirt Set In Satin Blend With A Matching Sling Bag",price: 7.95,product: "kurti",image: "https://staticm247.kalkifashion.com/media/tagalys/product_images/k/a/kalki_multi_colored-sg156656_2_.jpg",rating: {  rate: 4.5,  count: 146}},
    {id: 92, title: "Kalki Black Printed Kurti And Palazzo Set In Georgette For Girls",price: 12.99,product: "kurti",image: "https://staticm247.kalkifashion.com/media/tagalys/product_images/k/a/kalki_black_printed_kurti_and_palazzo-sg157594_2_.jpg",rating: {  rate: 3.6,  count: 145}},
    {id: 93, title: "Kalki Girls Light Purple Skirt And Crop Top In Hand Woven Cotton Silk With Tie Up At The Back Woven Border By Love The World Today",price: 39.99,product: "kurti",image: "https://staticm247.kalkifashion.com/media/tagalys/product_images/l/i/light-purple-skirt-and-crop-top-in-hand-woven-cotton-silk-with-tie-up-at-the-back-and-woven-border-by-love-the-world-today-m136c16d5f3y-sg52958_2_.jpg",rating: {  rate: 3.8,  count: 679}},
    {id: 94, title: "Kalki Girls Blue And Pink Organza Printed Dress With Ruffel Sleeves",price: 9.85,product: "kurti",image: "https://staticm247.kalkifashion.com/media/tagalys/product_images/b/l/blue_and_pink_organza_printed_dress-d038fk2178y-sg100688_2_.jpg",rating: {  rate: 4.7,  count: 130}},
    {id: 95, title: "Kalki Sky Blue Palazzo And Kurta Set In Satin Blend For Girls ",price: 7.95,product: "kurti",image: "https://staticm247.kalkifashion.com/media/tagalys/product_images/k/a/kalki_white_printed_top-sg162145_2_.jpg",rating: {  rate: 4.5,  count: 146}},
    {id: 96, title: "Kalki Wine Purple Top And Skirt With Sequins Embroidery In Chinon For Girls",price: 12.99,product: "kurti",image: "https://staticm247.kalkifashion.com/media/tagalys/product_images/k/a/kalki_wine_purple_top-sg161542_2_.jpg",rating: {  rate: 5,  count: 145}},
    

    
    
    {id: 97, title: "Kalki Sky Blue Boys Kurta Set In Silk With Threadwork And Pearls Around The Yoke For Boys",price: 39.99,product: "boy",image: "https://staticm247.kalkifashion.com/media/tagalys/product_images/k/a/kalki_sky_blue_boys_kurta_set_in_silk_with_threadwork-sg141555_2_.jpg",rating: {  rate: 3.8,  count: 679}},
    {id: 98, title: "Kalki Beige Boys Dhoti Kurta Set In Silk With Floral Print For Boys",price: 9.85,product: "boy",image: "https://staticm247.kalkifashion.com/media/tagalys/product_images/k/a/kalki_beige_boys_dhoti_kurta_set_in_silk-sg141523_2_.jpg",rating: {  rate: 4.7,  count: 130}},
    {id: 99, title: "Kalki Valentine Red Boys Kurta Set In Tussar Silk With Threadwork On The Yoke For Boys",price: 7.95,product: "boy",image: "https://staticm247.kalkifashion.com/media/tagalys/product_images/k/a/kalki_valenti-sg138054_16_.jpg",rating: {  rate: 4.5,  count: 146}},
    {id: 100, title: "Kalki Rose Red Boys Kurta Set In Silk With Floral Print",price: 12.99,product: "boy",image: "https://staticm247.kalkifashion.com/media/tagalys/product_images/k/a/kalki_rose_red_boys_kurta_set_in_silk-sg141635_2_.jpg",rating: {  rate: 3.6,  count: 145}},
    {id: 101, title: "Blush Pink Sherwani Set For Boys",price: 39.99,product: "boy",image: "https://staticm247.kalkifashion.com/media/catalog/product/e/l/elegant_peach_sherwani_set_for_boys-sg220175_5_.jpg?w=800",rating: {  rate: 3.8,  count: 679}},
    {id: 102, title: "Royal Blue Sherwani Set For Boys",price: 9.85,product: "boy",image: "https://staticm247.kalkifashion.com/media/tagalys/product_images/r/o/royal_blue_sherwani_set_for_boys-sg220219_4_.jpg",rating: {  rate: 4.7,  count: 130}},
    {id: 103, title: "Kalki Beige Sherwani Set In Satin With Threadwork And Sequins Embroidery For Boys",price: 7.95,product: "boy",image: "https://staticm247.kalkifashion.com/media/tagalys/product_images/k/a/kalki_beige_sherwani_set_in_satin-sg154824_2_.jpg",rating: {  rate: 4.5,  count: 146}},
    {id: 104, title: "Kalki Blue Sherwani Set In Suiting Fabric With Threadwork For Boys",price: 12.99,product: "boy",image: "https://staticm247.kalkifashion.com/media/tagalys/product_images/k/a/kalki_blue_sherwani_set_in_suiting_fabric-sg137658_2_.jpg",rating: {  rate: 3.6,  count: 145}},
    {id: 105, title: "Multi Color Vibrant Kurta Set For Boys",price: 39.99,product: "boy",image: "https://staticm247.kalkifashion.com/media/tagalys/product_images/v/i/vibrant_multi-color_kurta_set_for_boys-sg220230_5_.jpg",rating: {  rate: 3.8,  count: 679}},
    {id: 106, title: "Kalki Printed Petal Pink Kurta Set In Silk For Boys",price: 9.85,product: "boy",image: "https://staticm247.kalkifashion.com/media/tagalys/product_images/k/a/kalki_printed_petal_pink_kurta_set-sg152286_2_.jpg",rating: {  rate: 4.7,  count: 130}},
    {id: 107, title: "Kalki Multicolor Printed Kurta Set In Cotton Silk For Boys ",price: 7.95,product: "boy",image: "https://staticm247.kalkifashion.com/media/tagalys/product_images/k/a/kalki_multicolor_printed_kurta_set-sg154948_1_.jpg",rating: {  rate: 4.5,  count: 146}},
    {id: 108, title: "Kalki Multicolor Block Printed Kurta Set In Silk For Boys",price: 12.99,product: "boy",image: "https://staticm247.kalkifashion.com/media/tagalys/product_images/k/a/kalki_multicolor_block_printed_kurta_set_in_silk-sg137968_3_.jpg",rating: {  rate: 3.6,  count: 145}},
    {id: 109, title: "Blue Cutwork Embroidery Festive Tuxedo For Boys",price: 39.99,product: "boy",image: "https://staticm247.kalkifashion.com/media/tagalys/product_images/b/l/blue_cutwork_embroidery_festive_tuxedo_for_boys-sg201885_6_.jpg",rating: {  rate: 3.8,  count: 679}},
    {id: 110, title: "Kalki Peach Pink Boys Bandi Jacket Set With Threadwork",price: 9.85,product: "boy",image: "https://staticm247.kalkifashion.com/media/tagalys/product_images/k/a/kalki_peach_pink_boys_bandi_jacket_set-sg141715_2_.jpg",rating: {  rate: 4.7,  count: 130}},
    {id: 111, title: "Beige White Patola Printed Jacket And Kurta Set In Silk For Boys",price: 7.95,product: "boy",image: "https://staticm247.kalkifashion.com/media/tagalys/product_images/b/e/beige_white_patola_printed_jacket_and_kurta_set-sg154780_3_.jpg",rating: {  rate: 4.5,  count: 146}},
    {id: 112, title: "Kalki Pista Green Kurta Set In Silk For Boys",price: 12.99,product: "boy",image: "https://staticm247.kalkifashion.com/media/tagalys/product_images/k/a/kalki_pista_green_kurta_set_in_silk_for_boys-sg159793_2_.jpg",rating: {  rate: 5,  count: 145}},
  ];

  let [filter, setfilter] = useState(data);

  function manageData(item) {
    setfilter(data.filter(el => item === "All" ? data : el.product === item))
    setCurrent(item);
  };
  return (
    <div style={{marginTop:'100px'}}>
      <Container sx={{ display: 'flex'}}>
        <div style={{width:'10%', display: 'flex', flexWrap: 'wrap', height: '20%' }} className='Main'>
          <div style={{ position: 'relative' }}>
            <img src={Fam} alt="" width={"100%"} style={{ borderRadius: '50px', }} />
            <div style={{ position: 'absolute', textAlign: 'center',fontSize:'20px', top: '26px', color: 'white', fontFamily: '"Prosto One", system-ui', fontWeight: '600', width: '100%' }}>Filter</div>
          </div>
          <button className={current === "All" ? 'active' : "button"} onClick={() => manageData("All")}>All</button>
          <button className={current === "Gown" ? 'active' : "button"} onClick={() => manageData("Gown")}>Gown</button>
          <button className={current === "choli" ? 'active' : "button"} onClick={() => manageData("choli")}>Choli</button>
          <button className={current === "saree" ? 'active' : "button"} onClick={() => manageData("saree")}>Saree</button>
          <button className={current === "kurti" ? 'active' : "button"} style={{fontSize:'12px'}} onClick={() => manageData("kurti")}>baby girl</button>
          <button className={current === "kurta" ? 'active' : "button"} onClick={() => manageData("kurta")}>Kurta</button>
          <button className={current === "sherwani" ? 'active' : "button"} onClick={() => manageData("sherwani")}>Sherwani</button>
          <button className={current === "boy" ? 'active' : "button"} style={{fontSize:'12px'}} onClick={() => manageData("boy")}>baby boy</button>

        </div>
        <div style={{width:'100%'}}>
          <Box sx={{ display: 'flex',flexWrap: 'wrap', justifyContent: 'center'}}>
            {
              filter.map((el, i) => {
                return (
                  <Card key={i} ImageCard={el.image} HeadingCard={el.title} product={el.product} Price={el.price} Rating={el.rating} id={el.id}/>
                )
              })
            }
          </Box>
        </div>
      </Container>
    </div>
  );
}

export default WomenMain;