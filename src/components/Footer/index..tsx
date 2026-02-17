interface FooterLinks {
  label: string;
  href: string;
}
interface FooterProps {
  title: string;
  links: FooterLinks[];
}

const Footer = () => {
  const footerItems: FooterProps[] = [
    {
      title: "Company",
      links: [
        {
          label: "About Us",
          href: "/about",
        },
        {
          label: "Careers",
          href: "/careers",
        },
        {
          label: "Press",
          href: "/press",
        },
        {
          label: "Terms",
          href: "/terms",
        },
        {
          label: "Privacy",
          href: "/privacy",
        },
      ],
    },
    {
      title: "Products",
      links: [
        {
          label: "Borrow Money, Airtime & Data",
          href: "/borrow",
        },
        {
          label: "Pay BIlls",
          href: "/paybills",
        },
        {
          label: "Send / Refill Airtime & Data",
          href: "/send",
        },
        {
          label: "Ecommerce",
          href: "/ecommerce",
        },
      ],
    },
    {
      title: "Resources",
      links: [
        {
          label: "FAQs",
          href: "/faqs",
        },
        {
          label: "Help Center",
          href: "/helpcenter",
        },
        {
          label: "Blog",
          href: "/blog",
        },
      ],
    },
    {
      title: "Contact",
      links: [
        {
          label: "FAQs",
          href: "/faqs",
        },
        {
          label: "hello@scaripay.com",
          href: "/hello@scaripay.com",
        },
        {
          label: "+2348060514714",
          href: "/+2348060514714",
        },
      ],
    },
  ];
  return (
    <footer className="p-5 md:p-30  text-[#444C66]">
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-10">
        {footerItems.map((footerItem) => {
          return (
            <div key={footerItem.title}>
              <h4 className="font-semibold text-xl text-gray-600  mb-5">
                {footerItem.title}
              </h4>
              <ul className="space-y-5 text-sm md:text-base">
                {footerItem.links.map((link, idx) => (
                  <li key={idx}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
      <div className="text-center my-10 border-t border-gray-300">
        <p className="p-5 text-sm md:text-base">
          Copyright 2022 . All Rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
