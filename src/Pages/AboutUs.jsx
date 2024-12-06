// import React from 'react'
// import Card from '@mui/material/Card';
// import PngF from '../Images/Pngf.png'
// import PngS from '../Images/PngS.png'
// import AiFi from '../Images/AiFI.jpg'
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import '../animation';
// import About from '../Images/About.jpg'
// import AboutS from '../Images/image2.jpg'
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import { Box, Container } from '@mui/material';
// import febric from '../Images/fitting.webp'

// const AboutUs = () => {
//   return (
//     <>

//       <Box>
//         <Container>
//           <Box sx={{ position: 'relative', textAlign: 'center', borderRadius: '10px' }}>
//             <img src={About} alt="" width={"100%"} style={{ borderRadius: '10px' }} />
//             <Box sx={{ position: 'absolute', top: '0px', fontSize: { lg: 30, md: 25, sm: 20, xs: 20 }, fontWeight: '600', textTransform: 'uppercase', fontFamily: '"Prosto One", system-ui', color: 'white', width: '100%', my: '30px' }}>About Us</Box>
//             <Box sx={{ position: 'absolute', bottom: '10px', color: 'white', fontSize: '24px' }}>
//               Welcome to Culture Studio, where tradition meets contemporary style! Established in 2024, our mission is to celebrate the richness of both Western and traditional cultures through our carefully curated clothing rental service.
//             </Box>
//           </Box>
//         </Container>
//       </Box>

//       <Box sx={{ mb: '40px' }}>
//         <Box sx={{ my: { lg: '25px', md: '10px', sm: 'auto', } }}>
//           <Box sx={{ textAlign: 'center', fontSize: { lg: 30, md: 25, sm: 20, xs: 20 }, fontWeight: '600', textTransform: 'uppercase', fontFamily: '"Prosto One", system-ui', my: '30px' }}>Customization</Box>
//         </Box>
//         <Box sx={{ position: 'absolute', top: '30px' }}>
//           <img src={PngF} />
//         </Box>
//         <Box sx={{ position: 'absolute', top: '65px', right: '0px' }}>
//           <img src={PngS} width={"250px"} height={"280px"} />
//         </Box>
//         <Container>

//           {/* Choose Your Fabric */}
//           <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
//             <Box sx={{ display: 'flex', flexWrap: 'wrap', width: '100%', my: '30px' }}>
//               <Box sx={{ width: '50%' }}>
//                 <img src='https://im.whatshot.in/img/2018/Jun/muskan-1528307202.jpg?wp=1' alt="" width={"100%"} height={"100%"} />
//               </Box>
//               <Box sx={{ width: 'calc(50% - 40px)', px: '20px' }}>
//                 <Box sx={{ fontFamily: '"Prosto One", system-ui', color: '#dd1a18', fontSize: '34px' }}>Choose Your Fabric
//                 </Box>
//                 <Box sx={{ color: '#000', fontSize: '14px', mt: '10px' }}>Don’t forget to consider patterns and colors! Do you prefer bold prints, subtle designs, or solid colors? We have a variety of options to match your style</Box>
//                 <Box sx={{ color: '#000', fontSize: '14px', mt: '10px' }}>Feel free to touch and explore! Each fabric has its own unique texture and drape. If you have any specific requirements like stretch or weight, let me know, and I can help narrow it down! </Box>
//                 <Box sx={{ color: '#000', fontSize: '14px', mt: '10px' }}>Great! Based on what you’re looking for, here are some fabric options:</Box>
//                 <Box sx={{ color: '#000', fontSize: '14px', mt: '10px', gap: '10px' }}>
//                   <Box>
//                     <b>Cotton & Linens: </b>
//                     <p>Perfect for warm-weather wear, these fabrics are light, airy, and effortlessly comfortable. Ideal for casual looks or laid-back events.</p>
//                   </Box>
//                   <Box>
//                     <b>Wool & Wool Blends: </b>
//                     <p>For a refined, polished appearance, wool offers both warmth and durability. It's perfect for formal settings or cooler climates, delivering a crisp, structured fit.</p>
//                   </Box>
//                   <Box>
//                     <b>Silks & Satins: </b>
//                     <p>Add a touch of luxury with smooth, glossy silks or satins. These fabrics provide an elevated, elegant feel for those extra-special occasions.</p>
//                   </Box>
//                 </Box>
//               </Box>
//             </Box>

//             {/* Customize the Fit */}
//             <Box sx={{ display: 'flex', flexWrap: 'wrap', width: '100%', my: '30px' }}>
//               <Box sx={{ width: 'calc(50% - 40px)', px: '20px' }}>
//                 <Box sx={{ fontFamily: '"Prosto One", system-ui', color: '#dd1a18', fontSize: '34px' }}>Customize the Fit
//                 </Box>
//                 <Box sx={{ color: '#000', fontSize: '14px', mt: '10px' }}>Why settle for off-the-rack when you can have something made just for you?</Box>
//                 <Box sx={{ color: '#000', fontSize: '14px', mt: '10px' }}>At our <b style={{color:'#dd1a18'}}>Culture Studio</b> we believe the perfect fit is personal. Whether you prefer a tailored look or a more relaxed style, our customization options let you fine-tune every detail. Choose your cut, adjust the length, or add extra room where you need it most—we make it easy to design the fit that’s uniquely yours.</Box>
//                 <Box sx={{ color: '#000', fontSize: '14px', mt: '10px' }}>
//                   <b>Perfect Fit, Personalized for You :</b> <p>Choose a fit that matches your style—tailored or relaxed—so you feel confident and comfortable.</p>
//                   <b>Easy Adjustments: </b><p>Customize your cut, adjust lengths, and modify measurements to match your body and preferences.</p>
//                   <b>Made Just for You :</b> <p>With a few simple measurements, your piece is crafted to your exact specifications.</p>
//                   <b>Comfort Meets Style :</b><p>No need to compromise—our custom fits ensure you look great and feel even better.</p>

//                 </Box>
//               </Box>
//               <Box sx={{ width: '50%' }}>
//                 <img src='https://cdn.shopify.com/s/files/1/0597/5592/1540/files/Techniques_of_Tailoring_1024x1024.jpg?v=1721293802' alt="" width={"100%"} height={"100%"} />
//               </Box>
//             </Box>


//             {/* Choose Your Color */}
//             <Box sx={{ display: 'flex', flexWrap: 'wrap', width: '100%', my: '30px' }}>
//               <Box sx={{ width: '50%' }}>
//                 <img src='https://i.etsystatic.com/7803375/r/il/f56a0f/2496827625/il_570xN.2496827625_pvwx.jpg' alt="" width={"100%"} height={"100%"} />
//               </Box>

//               <Box sx={{ width: 'calc(50% - 40px)', px: '20px' }}>
//                 <Box sx={{ fontFamily: '"Prosto One", system-ui', color: '#dd1a18', fontSize: '34px' }}>Choose Your Color</Box>
//                 <Box sx={{ color: '#000', fontSize: '14px', mt: '10px' }}>At our <b style={{color:'#dd1a18'}}>Culture Studio</b> we believe that every detail matters, starting with the fabric that will define your wedding day look. Whether it's a bridal gown that embodies elegance or a groom's attire that exudes confidence, we carefully select fabric colors to complement your personal style and the essence of your big day.</Box>
//                 <Box sx={{ color: '#000', fontSize: '14px', mt: '10px' }}><br />
//                   <b>A Palette as Unique as Your Love Story :</b>
//                   <p>We understand that no two love stories are the same. That’s why we offer a curated palette of fabric colors, ranging from classic whites and ivories to rich, bold tones. Our collection is designed to give you the freedom to choose a color that speaks to your personality, your culture, or your vision for the day.</p>
//                   <b>Timeless Classics & Contemporary Shades : </b>
//                   <p>Our timeless shades—such as soft champagne, pure white, and ivory—are perfect for those looking for a traditional touch. But if you’re someone who wants to break away from the expected, we also offer contemporary hues like blush, soft pastels, and even deeper tones like navy or emerald for the bold bride or groom.</p>
//                   <b>High-Quality Fabrics That Feel as Good as They Look : </b>
//                   <p>Every fabric we use is handpicked for its quality and comfort, ensuring that you feel as amazing as you look. Our team of experts is dedicated to guiding you through the process of selecting the perfect fabric color that enhances your natural beauty and fits your vision.</p>
//                 </Box>
//               </Box>
//             </Box>

//             {/* Design Your Own Pattern */}
//             <Box sx={{ display: 'flex', flexWrap: 'wrap', width: '100%', my: '30px' }}>
//               <Box sx={{ width: 'calc(50% - 40px)', px: '20px' }}>
//                 <Box sx={{ fontFamily: '"Prosto One", system-ui', color: '#dd1a18', fontSize: '34px' }}>Design Your Own Pattern
//                 </Box>

//                 <Box sx={{ color: '#000', fontSize: '14px', mt: '10px' }}>At our <b style={{color:'#dd1a18'}}>Culture Studio</b> we understand that your wedding day is a reflection of your individuality. That’s why we offer a Design Your Own Pattern service, allowing you to personalize every detail of your groom’s attire. This unique feature gives you the freedom to express your personality and create a suit or accessory that is truly one-of-a-kind.</Box>
//                 <Box sx={{ color: '#000', fontSize: '14px', mt: '10px' }}>
//                   <b>A Suit That Tells Your Story :</b> 
//                   <p>From subtle details like monograms to bold, distinctive patterns, our team of expert tailors and designers will work closely with you to bring your vision to life. Whether you’re inspired by family heritage, personal passions, or contemporary trends, we’ll help you weave your story into the fabric of your wedding day attire.</p>
//                   <b>Expert Guidance at Every Step: </b>
//                   <p>Designing your own pattern doesn’t have to be daunting. Our specialists are here to guide you through the process, offering suggestions on fabrics, colors, and patterns that suit your style. From classic plaids and pinstripes to custom textures and motifs, we’ll ensure your final look is not only unique but also impeccably crafted.</p>
//                   <b>Premium Fabrics for a Lasting Impression :</b> 
//                   <p>Every pattern is printed or woven into high-quality, luxurious fabrics that ensure comfort and durability. Whether you want something sleek and modern or prefer a more vintage-inspired design, our fabrics elevate your custom pattern to the highest standard.</p>
//                 </Box>
//               </Box>
//               <Box sx={{ width: '50%' }}>
//                 <img src='https://i.pinimg.com/736x/69/be/34/69be342c1f5241b34407140767902ff9.jpg' alt="" width={"100%"} height={"440px"} style={{overflow:'hidden'}}/>
//               </Box>
//             </Box>

//           </Box>
//         </Container>
//       </Box>

//       <Box>
//         <Container>
//           <Box sx={{ position: 'relative', textAlign: 'center', mb:'30px'}}>
//             <img src={AboutS} alt="" width={"100%"} height={"200px"} style={{ borderRadius: '10px' }} />
//             <Box sx={{ position: 'absolute', top: '0px', fontSize: { lg: 30, md: 25, sm: 20, xs: 20 }, fontWeight: '600', textTransform: 'uppercase', fontFamily: '"Prosto One", system-ui', color: '#fff', width: '100%', my: '20px' }}>Vision</Box>
//             <Box sx={{ position: 'absolute', bottom: '10px', color: '#fff', fontSize: '24px' }}>
//               At Culture Studio, we believe that fashion is a powerful form of expression. We aim to provide a platform that not only showcases diverse cultural heritage but also offers sustainable options for those who wish to experience a variety of styles without the commitment of purchase.
//             </Box>
//           </Box>
//         </Container>
//       </Box>

//       <Box sx={{mb:'30px'}}>
//         <Container>
//           <Box sx={{ position: 'relative', textAlign: 'center' }}>
//             <img src={AiFi} alt="" width={"100%"} height={"200px"} style={{ borderRadius: '10px', opacity: '0.6' }} />
//             <Box sx={{ position: 'absolute', top: '0px', fontSize: { lg: 30, md: 25, sm: 20, xs: 20 }, fontWeight: '600', textTransform: 'uppercase', fontFamily: '"Prosto One", system-ui', color: '#000', width: '100%', my: '20px' }}>Mission</Box>
//             <Box sx={{ position: 'absolute', bottom: '10px', color: '#000', fontSize: '24px' }}>
//               We aim to craft a virtual bazaar where you can discover the Magnificence of India's
//               traditional attire, tailored to grace every occasion.
//             </Box>
//           </Box>
//         </Container>
//       </Box>
//     </>
//   )
// }

// export default AboutUs











import React from 'react';
import { Box, Container } from '@mui/material';
import About from '../Images/About.jpg';
import AboutS from '../Images/image2.jpg';
import Traditional from '../Images/Traditional.jpg';
import Western from '../Images/Western2.jpg';
import PngF from '../Images/Pngf.png';
import PngS from '../Images/PngS.png';
import AiFi from '../Images/AiFI.jpg';
import AboutMain from '../Images/AboutUsMain.jpg';
import { LineWeight } from '@mui/icons-material';

const AboutUs = () => {
  return (
    <>
      {/* About Us Section */}
      <Box sx={{ mt: '100px', mb: '50px' }}>
          <Box sx={{ textAlign: 'center', borderRadius: '10px', mb: 4 }}>
            <Box sx={{display:'flex',justifyContent:'center',alignItems:'center'}}>
              <img src={AboutMain} width={"100%"} alt="" />
              <Container sx={{position:'absolute'}}>
                <Box sx={{ fontSize: { lg: 30, md: 25, sm: 20, xs: 20 }, fontWeight: '600', textTransform:  'uppercase', fontFamily: '"Prosto One", system-ui', color: '#fff', width: '100%', mb: '20px', }}>
                  About Us
                </Box>
                <Box sx={{ color: '#fff', fontSize: { lg: '24px', md: '20px', sm: '18px', xs: '16px' } }}>
                  Welcome to Culture Studio, where tradition meets contemporary style! Established in 2024, our  mission is to celebrate the richness of both Western and traditional cultures through our  carefully curated clothing rental service.
                </Box>
              </Container>
            </Box>
          </Box>
      </Box>

      {/* Traditional section */}
      <Box sx={{mt:'100px'}}>
        <Container sx={{position:'relative'}}>
          <Box sx={{display:'flex', alignItems:"center"}}>
            <Box>
              <img src={Traditional} alt="" />
            </Box>
              <Box sx={{position:'absolute', display:'flex', justifyContent:'end'}}>
                <Box sx={{backgroundColor:"#3b3b3b",opacity:'0.6',top:'0px',width:'70%',border:'3px solid #fff'}}>
                    <Box sx={{color:'#fff',fontFamily:'"Prosto One",system-ui',fontSize:'40px',textAlign:'center',px:'20px',my:"20px"}}>Traditional Culture</Box>
                    <Box sx={{color:'#fff',fontFamily:'"Prosto One",system-ui',fontSize:'22px',textAlign:'center',px:'20px',my:"10px"}}>Traditional culture is a vibrant blend of various customs, religions, and practices that have evolved over thousands of years. It is deeply rooted in history and spirituality.</Box>
                    <ul style={{listStyleType:"disc",padding:'20px'}}>
                      <li style={{display:'flex',alignItems:"start", listStyle:"inherit"}}>
                        <h1 style={{fontSize:"20px",color:"#fff",}}>Family and Community: </h1>
                        <p style={{fontSize:"20px",color:"#fff",marginLeft:"4px"}}>Emphasis on kinship, respect for elders, and communal living.</p>
                      </li>
                      <li style={{display:'flex',alignItems:"start", listStyle:"inherit" ,marginTop:"0px"}}>
                        <h1 style={{fontSize:"20px",color:"#fff",}}>Spirituality:</h1>
                        <p style={{fontSize:"20px",color:"#fff",marginLeft:"4px"}}>Predominance of various religions (Hinduism, Buddhism, Islam, Sikhism) influencing daily life and festivals.</p>
                      </li>
                    </ul>
                </Box>
            </Box>
          </Box>
          <Box sx={{display:'flex', alignItems:"center"}}>
              <Box sx={{position:'absolute', display:'flex', justifyContent:'start'}}>
                <Box sx={{backgroundColor:"#3b3b3b",opacity:'0.6',top:'0px',width:'70%',border:'3px solid #fff'}}>
                    <Box sx={{color:'#fff',fontFamily:'"Prosto One",system-ui',fontSize:'40px',textAlign:'center',px:'20px',my:"20px"}}>Western Culture</Box>
                    <Box sx={{color:'#fff',fontFamily:'"Prosto One",system-ui',fontSize:'22px',textAlign:'center',px:'20px',my:"10px"}}>Western culture, shaped by historical events and diverse influences, emphasizes individualism, democratic values, and innovation.</Box>
                    <ul style={{listStyleType:"disc",padding:'30px'}}>
                      <li style={{display:'flex',alignItems:"start", listStyle:"inherit"}}>
                        <h1 style={{fontSize:"20px",color:"#fff",}}>Values: </h1>
                        <p style={{fontSize:"20px",color:"#fff",marginLeft:"4px"}}>Individual rights and freedom are paramount, with a strong emphasis on equality and democracy.The rule of law and the importance of civil liberties are also significant.
                        </p>
                      </li>
                      <li style={{display:'flex',alignItems:"start", listStyle:"inherit" ,marginTop:"0px"}}>
                        <h1 style={{fontSize:"20px",color:"#fff",}}>Legacy:</h1>
                        <p style={{fontSize:"20px",color:"#fff",marginLeft:"4px"}}>The British Empire's expansion spread British culture globally, influencing governance, education, and language.</p>
                      </li>
                    </ul>
                </Box>
            </Box>
            <Box sx={{display:'flex',justifyContent:'end' ,width:'100%'}}>
              <img src={Western}
               alt="" />
            </Box>
          </Box>

      {/* Vision Section */}
      <Box sx={{ mb: '30px', mt: '30px' }}>
        <Container>
          <Box sx={{ textAlign: 'center', mb: '60px' }}>
            <Box sx={{ fontSize: { lg: 30, md: 25, sm: 20, xs: 20 }, fontWeight: '600', textTransform: 'uppercase', fontFamily: '"Prosto One", system-ui', color: '#000', width: '100%', my: '20px' }}>Vision</Box>
            <Box sx={{ color: '#000', fontSize: { lg: '24px', md: '20px', sm: '18px', xs: '16px' } }}>
              At Culture Studio, we believe that fashion is a powerful form of expression. We aim to provide a platform that showcases diverse cultural heritage and offers sustainable options for those who wish to experience various styles.
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Mission Section */}
      <Box sx={{ mb: '30px', mt: '30px' }}>
        <Container>
          <Box sx={{ textAlign: 'center' , mb:'60px'}}>
            <Box sx={{ fontSize: { lg: 30, md: 25, sm: 20, xs: 20 }, fontWeight: '600', textTransform: 'uppercase', fontFamily: '"Prosto One", system-ui', color: '#000', width: '100%', my: '20px' }}>Mission</Box>
            <Box sx={{ color: '#000', fontSize: { lg: '24px', md: '20px', sm: '18px', xs: '16px' } }}>
              Our mission is to bridge the gap between modern fashion and traditional craftsmanship by offering clothing that is as meaningful as it is beautiful. From intricate patterns to hand-stitched details, our designs reflect a fusion of old-world artistry and contemporary trends.
            </Box>
          </Box>
        </Container>
      </Box>


      {/* Customization Section */}
      <Box sx={{ mb: '30px', mt: '30px' }}>
        <Box sx={{ my: { lg: '25px', md: '10px', sm: 'auto' } }}>
          <Box sx={{ textAlign: 'center', fontSize: { lg: 30, md: 25, sm: 20, xs: 20 }, fontWeight: '600', textTransform: 'uppercase', fontFamily: '"Prosto One", system-ui', my: '30px' }}>
            Customization
          </Box>
        </Box>
        <Box sx={{ position: 'absolute', top: '30px' }}>
          <img src={PngF} alt="PngF" />
        </Box>
        <Box sx={{ position: 'absolute', top: '65px', right: '0px' }}>
          <img src={PngS} alt="PngS" width={"250px"} height={"280px"} />
        </Box>
        <Container>
          {/* Choose Your Fabric Section */}
          <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', width: '100%', my: '30px' }}>
              <Box sx={{ width: { lg: '50%', xs: '100%' }, mb: { xs: 2 } }}>
                <img src='https://im.whatshot.in/img/2018/Jun/muskan-1528307202.jpg?wp=1' alt="Fabric" width="100%" height="100%" />
              </Box>
              <Box sx={{ width: { lg: 'calc(50% - 40px)', xs: '100%' }, px: { lg: '20px', xs: 0 } }}>
                <Box sx={{ fontFamily: '"Prosto One", system-ui', color: '#dd1a18', fontSize: '34px' }}>
                  Choose Your Fabric
                </Box>
                <Box sx={{ color: '#000', fontSize: '14px', mt: '10px' }}>
                  Don’t forget to consider patterns and colors! Do you prefer bold prints, subtle designs, or solid colors? We have a variety of options to match your style.
                </Box>
                {/* Fabric Options */}
                <Box sx={{ color: '#000', fontSize: '14px', mt: '10px', gap: '10px' }}>
                  <Box>
                    <b>Cotton & Linens: </b>
                    <p>Perfect for warm-weather wear, these fabrics are light, airy, and effortlessly comfortable. Ideal for casual looks or laid-back events.</p>
                  </Box>
                  <Box>
                    <b>Wool & Wool Blends: </b>
                    <p>For a refined, polished appearance, wool offers both warmth and durability. It's perfect for formal settings or cooler climates, delivering a crisp, structured fit.</p>
                  </Box>
                  <Box>
                    <b>Silks & Satins: </b>
                    <p>Add a touch of luxury with smooth, glossy silks or satins. These fabrics provide an elevated, elegant feel for those extra-special occasions.</p>
                  </Box>
                </Box>
              </Box> 
            </Box>

            {/* Customize the Fit Section */}
            <Box sx={{ display: 'flex', flexWrap: 'wrap', width: '100%', my: '30px' }}>
              <Box sx={{ width: { lg: 'calc(50% - 40px)', xs: '100%' }, px: { lg: '20px', xs: 0 }, mb: { xs: 2 } }}>
                <Box sx={{ fontFamily: '"Prosto One", system-ui', color: '#dd1a18', fontSize: '34px' }}>
                  Customize the Fit
                </Box>
                <Box sx={{ color: '#000', fontSize: '14px', mt: '10px' }}>
                  Why settle for off-the-rack when you can have something made just for you? At our <b style={{ color: '#dd1a18' }}>Culture Studio</b> we believe the perfect fit is personal.
                </Box>
                {/* Fit Customization Info */}
                <Box sx={{ color: '#000', fontSize: '14px', mt: '10px' }}>
                  <b>Perfect Fit, Personalized for You: </b> <p>Choose a fit that matches your style—tailored or relaxed—so you feel confident and comfortable.</p>
                  <b>Easy Adjustments: </b> <p>Customize your cut, adjust lengths, and modify measurements to match your body and preferences.</p>
                  <b>Comfort Meets Style: </b> <p>No need to compromise—our custom fits ensure you look great and feel even better.</p>
                </Box>
              </Box>
              <Box sx={{ width: { lg: '50%', xs: '100%' } }}>
                <img src='https://cdn.shopify.com/s/files/1/0597/5592/1540/files/Techniques_of_Tailoring_1024x1024.jpg?v=1721293802' alt="Tailoring" width="100%" height="100%" />
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

    </Container>
  </Box>

      

      

    </> 
  );
};

export default AboutUs;
