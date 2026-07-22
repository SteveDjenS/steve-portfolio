const asset = (path) => `${import.meta.env.BASE_URL}${path}`;

export const certifications = [
  {
    id: "cisco-python-essentials-2",
    title: "Python Essentials 2",
    issuer: "Cisco Networking Academy",
    date: "20 juin 2025",
    image: asset("certifications/cert-cisco-python-essentials-2.png"),
    pdf: asset("certifications/cert-cisco-python-essentials-2.pdf"),
  },
  {
    id: "cisco-python-essentials-1",
    title: "Python Essentials 1",
    issuer: "Cisco Networking Academy",
    date: "10 mai 2025",
    image: asset("certifications/cert-cisco-python-essentials-1.png"),
    pdf: asset("certifications/cert-cisco-python-essentials-1.pdf"),
  },
  {
    id: "python-bootcamp",
    title: "2025 Complete Python Bootcamp — from Zero to Hero",
    issuer: "Udemy — Toppers Bootcamp",
    date: "15 mai 2025",
    duration: "11h",
    image: asset("certifications/cert-python-bootcamp.png"),
    pdf: asset("certifications/cert-python-bootcamp.pdf"),
  },
  {
    id: "js-php",
    title: "JavaScript And PHP Programming Complete Course",
    issuer: "Udemy — Proper Dot Institute",
    date: "20 juillet 2026",
    duration: "5h",
    image: asset("certifications/cert-js-php.png"),
    pdf: asset("certifications/cert-js-php.pdf"),
  },
  {
    id: "node-rest-api",
    title: "Build a Backend REST API with Node JS from Scratch",
    issuer: "Udemy — Pierre Henry",
    date: "20 juillet 2026",
    duration: "12.5h",
    image: asset("certifications/cert-node-rest-api.png"),
    pdf: asset("certifications/cert-node-rest-api.pdf"),
  },
];
