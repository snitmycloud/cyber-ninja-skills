# Cyber Journey Hub

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <title>SN Cyber Academy | Cybersecurity Training Institute</title>

  <meta
    name="description"
    content="SN Cyber Academy offers practical Cybersecurity, Ethical Hacking, SOC Analyst and IT Security training."
  >

  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: Arial, Helvetica, sans-serif;
      background: #07111f;
      color: #ffffff;
      line-height: 1.6;
    }

    a {
      text-decoration: none;
      color: inherit;
    }

    .container {
      width: 90%;
      max-width: 1200px;
      margin: auto;
    }

    /* NAVBAR */

    header {
      background: #081526;
      border-bottom: 1px solid #19304d;
      position: sticky;
      top: 0;
      z-index: 1000;
    }

    nav {
      height: 75px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .logo {
      font-size: 24px;
      font-weight: bold;
      color: #00e5ff;
    }

    .logo span {
      color: #ffffff;
    }

    .nav-links {
      display: flex;
      gap: 30px;
      list-style: none;
    }

    .nav-links a {
      color: #d5dfeb;
      font-size: 15px;
    }

    .nav-links a:hover {
      color: #00e5ff;
    }

    .nav-btn {
      background: #00d9ff;
      color: #00111a !important;
      padding: 11px 20px;
      border-radius: 6px;
      font-weight: bold;
    }

    /* HERO */

    .hero {
      min-height: 650px;
      display: flex;
      align-items: center;
      background:
        radial-gradient(circle at 80% 30%, #073b54 0%, transparent 35%),
        linear-gradient(135deg, #06101c, #0b1c30);
    }

    .hero-content {
      max-width: 750px;
    }

    .tag {
      display: inline-block;
      padding: 7px 15px;
      border: 1px solid #00d9ff;
      border-radius: 30px;
      color: #00d9ff;
      margin-bottom: 20px;
      font-size: 14px;
    }

    .hero h1 {
      font-size: 56px;
      line-height: 1.1;
      margin-bottom: 25px;
    }

    .hero h1 span {
      color: #00d9ff;
    }

    .hero p {
      font-size: 19px;
      color: #b8c8d8;
      max-width: 680px;
      margin-bottom: 35px;
    }

    .buttons {
      display: flex;
      gap: 15px;
      flex-wrap: wrap;
    }

    .btn {
      display: inline-block;
      padding: 14px 25px;
      border-radius: 7px;
      font-weight: bold;
    }

    .primary {
      background: #00d9ff;
      color: #001018;
    }

    .secondary {
      border: 1px solid #39536c;
      color: white;
    }

    /* SECTIONS */

    section {
      padding: 85px 0;
    }

    .section-title {
      text-align: center;
      margin-bottom: 50px;
    }

    .section-title h2 {
      font-size: 38px;
      margin-bottom: 12px;
    }

    .section-title p {
      color: #9eafc0;
    }

    /* COURSE */

    .course-box {
      background: #0c1b2c;
      border: 1px solid #1d3852;
      border-radius: 14px;
      padding: 40px;
      display: grid;
      grid-template-columns: 1.4fr 1fr;
      gap: 40px;
    }

    .course-box h3 {
      font-size: 30px;
      margin-bottom: 15px;
      color: #00d9ff;
    }

    .course-box p {
      color: #b8c8d8;
      margin-bottom: 20px;
    }

    .course-list {
      list-style: none;
    }

    .course-list li {
      padding: 8px 0;
      color: #dce7f1;
    }

    .course-list li::before {
      content: "✓";
      color: #00d9ff;
      margin-right: 10px;
    }

    .price-box {
      background: #071321;
      border-radius: 12px;
      padding: 30px;
      text-align: center;
      border: 1px solid #20415d;
    }

    .old-price {
      color: #7e8e9e;
      text-decoration: line-through;
      font-size: 20px;
    }

    .price {
      color: #00e5ff;
      font-size: 42px;
      font-weight: bold;
      margin: 10px 0;
    }

    /* FEATURES */

    .cards {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 25px;
    }

    .card {
      background: #0c1b2c;
      border: 1px solid #1d3852;
      border-radius: 12px;
      padding: 30px;
      transition: 0.3s;
    }

    .card:hover {
      transform: translateY(-6px);
      border-color: #00d9ff;
    }

    .icon {
      font-size: 32px;
      margin-bottom: 15px;
    }

    .card h3 {
      margin-bottom: 10px;
    }

    .card p {
      color: #9eafc0;
    }

    /* MODULES */

    .modules {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 15px;
    }

    .module {
      background: #0c1b2c;
      padding: 20px;
      border-radius: 8px;
      border-left: 4px solid #00d9ff;
    }

    .module span {
      color: #00d9ff;
      font-weight: bold;
    }

    /* TRAINER */

    .trainer {
      background: #0b1928;
    }

    .trainer-box {
      display: flex;
      gap: 40px;
      align-items: center;
      background: #0e2033;
      padding: 40px;
      border-radius: 15px;
      border: 1px solid #1e3b55;
    }

    .trainer-avatar {
      min-width: 150px;
      height: 150px;
      border-radius: 50%;
      background: #00d9ff;
      color: #001018;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 45px;
      font-weight: bold;
    }

    .trainer-info h3 {
      font-size: 28px;
      margin-bottom: 8px;
    }

    .trainer-info p {
      color: #b5c5d5;
    }

    /* CTA */

    .cta {
      text-align: center;
      background:
        linear-gradient(135deg, #06334a, #071b2d);
    }

    .cta h2 {
      font-size: 42px;
      margin-bottom: 15px;
    }

    .cta p {
      color: #b8c8d8;
      margin-bottom: 30px;
    }

    /* FOOTER */

    footer {
      background: #040b13;
      padding: 35px 0;
      text-align: center;
      color: #8294a7;
    }

    footer strong {
      color: #00d9ff;
    }

    /* MOBILE */

    @media (max-width: 768px) {

      .nav-links {
        display: none;
      }

      .hero {
        min-height: 550px;
      }

      .hero h1 {
        font-size: 38px;
      }

      .hero p {
        font-size: 16px;
      }

      .course-box {
        grid-template-columns: 1fr;
      }

      .cards {
        grid-template-columns: 1fr;
      }

      .modules {
        grid-template-columns: 1fr;
      }

      .trainer-box {
        flex-direction: column;
        text-align: center;
      }

      .cta h2 {
        font-size: 32px;
      }
    }
  




  

  


    


      

        


          SN Cyber Academy
        



        


          

Home


          

Course


          

Modules


          

Trainer


          

Contact


        



      
    




  

  



    



      



        


          Practical Cybersecurity Training
        



        


          Build Your Career in
          Cybersecurity
        



        


          Learn Cybersecurity, Ethical Hacking, SOC Operations,
          Vulnerability Assessment and Security Tools through
          practical, hands-on training.
        



        


          
            Explore Course
          

          
            Contact Us
          
        



      



    



  




  

  



    



      


        

Cybersecurity Professional Program


        

Learn security concepts through practical labs and real-world tools.


      



      



        



          

Cybersecurity & Ethical Hacking



          


            A practical training program designed to help students
            understand cybersecurity fundamentals and security
            operations.
          



          


            

Cybersecurity Fundamentals


            

Networking & Security


            

Linux & Windows Security


            

Ethical Hacking


            

Web Application Security


            

SOC & SIEM Operations


            

Vulnerability Assessment


            

Hands-on Security Labs


          



        



        



          

Course Fee



          


            ₹30,000
          



          


            ₹25,000
          



          


            Practical Training
          



          
            Enquire Now
          

        



      



    



  




  

  



    



      



        

Why Choose SN Cyber Academy?



        


          Focused on practical learning and industry-oriented skills.
        



      



      



        


          

💻


          

Hands-on Labs


          


            Practice cybersecurity concepts using real security
            tools and controlled lab environments.
          


        



        


          

🛡️


          

Security Tools


          


            Work with tools used across reconnaissance,
            vulnerability assessment and security operations.
          


        



        


          

🎯


          

Career Focused


          


            Build practical knowledge relevant to cybersecurity
            and SOC-related roles.
          


        



      



    



  




  

  



    



      



        

Course Modules



        


          A structured learning path from fundamentals to security operations.
        



      



      



        


          01 Introduction to Cybersecurity
        



        


          02 Networking Fundamentals
        



        


          03 Kali Linux Fundamentals
        



        


          04 Windows & Active Directory
        



        


          05 Reconnaissance & OSINT
        



        


          06 Scanning & Enumeration
        



        


          07 Vulnerability Analysis
        



        


          08 Exploitation & Metasploit
        



        


          09 Post Exploitation
        



        


          10 Wireless Security
        



        


          11 Web Application Security
        



        


          12 SOC & SIEM Operations
        



      



    



  




  

  



    



      



        

Learn From Industry Experience



      



      



        


          S
        



        



          

Mr. Sampath



          


            Microsoft Certified Trainer with extensive IT industry
            experience and practical training expertise.
          



          


            Training areas include Azure, DevOps, Networking,
            Cybersecurity and Cloud technologies.
          



        



      



    



  




  

  



    



      

Start Your Cybersecurity Journey



      


        Build practical skills and prepare for your next IT career opportunity.
      



      
        Call +91 96400 59999
      

    



  




  

  



    



      


        © 2026 SN Cyber Academy.
        All Rights Reserved.
      



    



  Add this Logo inside this

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://cyber-ninja-skills.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/8b4f30c1-802d-4a75-8b28-9a9e453ee4bc).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
