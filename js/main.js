(function ($) {
    "use strict";
    
    // Fresh Robust Dropdown System
    $(document).ready(function () {
        
        // Dropdown Manager Class
        class DropdownManager {
            constructor() {
                this.isDesktop = window.innerWidth > 992;
                this.activeDropdown = null;
                this.hoverTimeout = null;
                this.init();
            }
            
            init() {
                this.bindEvents();
                this.setupResponsive();
            }
            
            bindEvents() {
                // Desktop hover events
                if (this.isDesktop) {
                    this.bindDesktopEvents();
                } else {
                    this.bindMobileEvents();
                }
                
                // Global events
                this.bindGlobalEvents();
            }
            
            bindDesktopEvents() {
                $('.navbar .dropdown').off('mouseenter mouseleave').on({
                    mouseenter: (e) => {
                        const $dropdown = $(e.currentTarget);
                        this.showDropdown($dropdown);
                    },
                    mouseleave: (e) => {
                        const $dropdown = $(e.currentTarget);
                        this.hideDropdown($dropdown);
                    }
                });
                
                // Click support for accessibility
                $('.navbar .dropdown-toggle').off('click').on('click', (e) => {
                    e.preventDefault();
                    const $dropdown = $(e.currentTarget).closest('.dropdown');
                    this.toggleDropdown($dropdown);
                });
            }
            
            bindMobileEvents() {
                $('.navbar .dropdown-toggle').off('click').on('click', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    const $dropdown = $(e.currentTarget).closest('.dropdown');
                    this.toggleDropdown($dropdown);
                });
            }
            
            bindGlobalEvents() {
                // Close on outside click
                $(document).off('click.dropdown').on('click.dropdown', (e) => {
                    if (!$(e.target).closest('.dropdown').length) {
                        this.closeAllDropdowns();
                    }
                });
                
                // Close on escape key
                $(document).off('keydown.dropdown').on('keydown.dropdown', (e) => {
                    if (e.key === 'Escape') {
                        this.closeAllDropdowns();
                    }
                });
                
                // Close on window blur
                $(window).off('blur.dropdown').on('blur.dropdown', () => {
                    this.closeAllDropdowns();
                });
            }
            
            showDropdown($dropdown) {
                // Clear any pending hide timeouts
                if (this.hoverTimeout) {
                    clearTimeout(this.hoverTimeout);
                    this.hoverTimeout = null;
                }
                
                // Close other dropdowns
                this.closeOtherDropdowns($dropdown);
                
                // Show current dropdown
                const $menu = $dropdown.find('.dropdown-menu');
                $menu.addClass('show');
                this.activeDropdown = $dropdown;
                
                // Add active state to toggle
                $dropdown.find('.dropdown-toggle').addClass('active');
            }
            
            hideDropdown($dropdown) {
                // Set timeout to allow moving mouse to dropdown menu
                this.hoverTimeout = setTimeout(() => {
                    const $menu = $dropdown.find('.dropdown-menu');
                    $menu.removeClass('show');
                    $dropdown.find('.dropdown-toggle').removeClass('active');
                    
                    if (this.activeDropdown === $dropdown) {
                        this.activeDropdown = null;
                    }
                }, 150);
            }
            
            toggleDropdown($dropdown) {
                const $menu = $dropdown.find('.dropdown-menu');
                const isVisible = $menu.hasClass('show');
                
                if (isVisible) {
                    this.hideDropdown($dropdown);
                } else {
                    this.showDropdown($dropdown);
                }
            }
            
            closeOtherDropdowns($currentDropdown) {
                $('.navbar .dropdown').not($currentDropdown).each((index, element) => {
                    const $dropdown = $(element);
                    const $menu = $dropdown.find('.dropdown-menu');
                    $menu.removeClass('show');
                    $dropdown.find('.dropdown-toggle').removeClass('active');
                });
            }
            
            closeAllDropdowns() {
                $('.navbar .dropdown-menu').removeClass('show');
                $('.navbar .dropdown-toggle').removeClass('active');
                this.activeDropdown = null;
                
                if (this.hoverTimeout) {
                    clearTimeout(this.hoverTimeout);
                    this.hoverTimeout = null;
                }
            }
            
            setupResponsive() {
                $(window).off('resize.dropdown').on('resize.dropdown', () => {
                    const wasDesktop = this.isDesktop;
                    this.isDesktop = window.innerWidth > 992;
                    
                    // Reinitialize if breakpoint changed
                    if (wasDesktop !== this.isDesktop) {
                        this.closeAllDropdowns();
                        this.bindEvents();
                    }
                });
            }
        }
        
        // Initialize dropdown system
        window.dropdownManager = new DropdownManager();
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });

    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });


    // Post carousel
    $(".post-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:2
            }
        }
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        center: true,
        autoplay: true,
        smartSpeed: 2000,
        dots: true,
        loop: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    
})(jQuery);

