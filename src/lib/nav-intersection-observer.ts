export const NavigationObserver = () => {
  // Select all sections and navigation links
  const sections = document.querySelectorAll(".section");
  const navLinks = document.querySelectorAll(".nav-indicator");

  // Create an Intersection Observer
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const navLink = document.querySelector(
          `.nav-indicator[href="#${entry.target.id}"]`
        );

        if (entry.isIntersecting) {
          // Add 'active' class to the link when its section is in view
          navLinks.forEach((link) => link.classList.remove("active"));
          navLink?.classList.add("active");
        }
      });
    },
    { threshold: 0.1 } // Trigger when 50% of the section is visible
  );

  // Observe each section
  sections.forEach((section) => observer.observe(section));
};
