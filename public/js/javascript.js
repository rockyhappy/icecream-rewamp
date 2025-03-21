$(window).on("load",function(){$("#loader").fadeOut("fast")}),$(document).ready(function(){var e;function t(){e=setInterval(n,16e3)}function n(){var e=$(".slide-active").next(),t=$("li.active").next();0==e.length&&(e=$(".slide").first(),t=$(".slide-indicator li").first());var n=e.index();$(".slide").css({transform:"translate(-"+100*n+"%)"}),$(".slide").removeClass("slide-active"),e.addClass("slide-active");e.find(".caption");$(".slide-indicator li").removeClass("active"),t.addClass("active")}$(document).delegate(".open","click",function(e){$(this).addClass("oppenned"),e.stopPropagation()}),$(document).delegate("body","click",function(e){$(".open").removeClass("oppenned")}),$(document).delegate(".cls","click",function(e){$(".open").removeClass("oppenned"),e.stopPropagation()}),$(".navilink").on("click",function(e){if(""!==this.hash){e.preventDefault();var t=this.hash;$("html, body").animate({scrollTop:$(t).offset().top},800,function(){window.location.hash=t})}}),$(".slide-indicator li").on("click",function(){clearInterval(e);var n=$(this).index();$(".slide-indicator li").removeClass("active"),$(".slide").removeClass("slide-active"),$(".slide").eq(n).addClass("slide-active"),$(this).addClass("active"),$(".slide").css({transform:"translate(-"+100*n+"%)"}),t()}),t(),function(){function e(){$(".nav-wrapper").remove(),$(".caret").removeClass("open"),$(".dropdown-nav").slideUp(),$("body").animate({right:"0"}),$(".nav-container").animate({right:"-100%"})}$(".nav-menu").on("click",function(){$("body").animate({right:"320"}),$(".nav-container").animate({right:"0"}),$('<div class="nav-wrapper"></div>').appendTo("body")}),$(".close-button").on("click",e),$("body").on("click",".nav-wrapper",e),$(".dropdown-container a").on("click",function(){$(this).children(".caret").toggleClass("open"),$(this).next(".dropdown-nav").slideToggle(300)})}();var i="data:text/plain;base64,"+window.btoa(JSON.stringify({particles:{number:{value:100,density:{enable:!0,value_area:800}},color:{value:"#5e5e5e"},shape:{type:"circle",stroke:{width:0,color:"#000000"},polygon:{nb_sides:5},image:{src:"img/github.svg",width:100,height:100}},opacity:{value:.5,random:!1,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:3,random:!0,anim:{enable:!1,speed:40,size_min:.1,sync:!1}},line_linked:{enable:!0,distance:80,color:"#5e5e5e",opacity:.4,width:.6413648243462091},move:{enable:!0,speed:6,direction:"none",random:!1,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"window",events:{onhover:{enable:!1,mode:"repulse"},onclick:{enable:!0,mode:"push"},resize:!0},modes:{grab:{distance:400,line_linked:{opacity:1}},bubble:{distance:400,size:40,duration:2,opacity:8,speed:3},repulse:{distance:200,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0}));particlesJS.load("particles-js",i),$(".default-ticker").ticker({item:"div",pauseOnHover:!0,speed:70,pauseAt:"",delay:500}),$(function(){$('[data-toggle="tooltip"]').tooltip()}),$("#centralModalLg").on("show.bs.modal",function(){$(".lazy_load").each(function(){var e=$(this);e.attr("src",e.data("sc"))})}),d("load",function(){a=document.getElementsByClassName("lazy")}),d("load",o),d("scroll",o);var a=[];function o(){for(var e=0;e<a.length;e++)t=a[e],void 0,(n=t.getBoundingClientRect()).bottom>=0&&n.right>=0&&n.top<=(window.innerHeight||document.documentElement.clientHeight)&&n.left<=(window.innerWidth||document.documentElement.clientWidth)&&a[e].getAttribute("data-src")&&(a[e].src=a[e].getAttribute("data-src"),a[e].removeAttribute("data-src"));var t,n;a=Array.prototype.filter.call(a,function(e){return e.getAttribute("data-src")})}function d(e,t){window.addEventListener?window.addEventListener(e,t):window.attachEvent("on"+e,t)}});

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Initialize Typed.js if the element exists
  if (document.getElementById('typed')) {
    new Typed('#typed', {
      strings: [
        "We are a team of passionate developers.",
        "We build innovative solutions.",
        "We create amazing web applications.",
        "We develop mobile apps that users love.",
        "We implement machine learning solutions."
      ],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 1500,
      startDelay: 1000,
      loop: true
    });
  }

  // Add smooth scrolling to all links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });

  // Add animation to services cards
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-10px)';
      this.style.transition = 'transform 0.3s ease';
      this.style.boxShadow = '0 10px 20px rgba(0,0,0,0.2)';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
      this.style.boxShadow = '0 5px 10px rgba(0,0,0,0.1)';
    });
  });
});