type PartnerLink = { label: string; href?: string };

const CommunityPartnersListSection = () => {
  // Combined from PFM site partner list + extended list shown in your screenshot.
  // If you want, I can add/adjust URLs for partners that have websites.
  const partners: PartnerLink[] = [
    { label: "Access York" },
    { label: "Affordable Housing Advocates" },
    { label: "Anchor Lancaster" },
    { label: "A Woman’s Concern" },
    { label: "Bethany Christian Services" },
    { label: "Boys & Girls Club of Lancaster", href: "https://bgclanc.org/" },
    { label: "Bright Side Opportunities Center", href: "https://www.brightsideopportunities.org/" },
    { label: "Capital Region Veterans Coalition", href: "https://www.crvetcoalition.org/" },
    { label: "Central PA Food Bank", href: "https://www.centralpafoodbank.org/" },
    { label: "Chuch World Services of Harrisburg", href: "https://cwsharrisburg.org/" },
    { label: "Church World Services of Lancaster", href: "https://cwslancaster.org/" },
    { label: "Clare House" },
    { label: "Columbia Borough" },
    { label: "Columbia Borough School District", href: "https://www.columbiabsd.org/" },
    { label: "Columbia Dream Center" },
    { label: "Community Action Partnership" },
    { label: "Community Connections Thrift Store & Resource Center", href: "https://communityconnectionsthrift.com/" },
    { label: "Community Progress Council" },
    { label: "DIVE Inc" },
    { label: "ECHOS" },
    { label: "Eckerd Connects" },
    { label: "Ephrata Social Services" },
    { label: "Family First Health" },
    { label: "Family Promise Harrisburg Capital Region", href: "https://www.familypromisehcr.org/what-we-do" },
    { label: "Home on Ferrisland" },
    { label: "Kinderhook Evangelical Congregational Church", href: "https://www.facebook.com/groups/177629952265106/" },
    { label: "Lancaster County Behavioral Health and Developmental Services (LCBHDS)", href: "https://www.lancastercountybhds.org/" },
    { label: "Lancaster County Children and Youth Agency", href: "https://co.lancaster.pa.us/129/Children-Youth-Agency" },
    { label: "Lancaster County Food Hub", href: "https://lancasterfoodhub.org/" },
    { label: "Lancaster County Reentry Coalition", href: "https://lchra.com/our-organizations/reentry-coalition/" },
    { label: "Lancaster Vet Center" },
    { label: "Living Well Institute" },
    { label: "Love & Legacy Inc", href: "https://www.luvlegacy.info/" },
    { label: "Love INC" },
    { label: "Magro House" },
    { label: "Moravian Center of Lancaster", href: "https://www.lancastermoravian.org/about/moravian-center" },
    { label: "New Hope Ministries" },
    { label: "Penn Medicine / Lancaster General Health", href: "https://www.lancastergeneralhealth.org/patient-and-visitor-information/find-a-location/suburban-pavilion" },
    { label: "Power Packs Project" },
    { label: "Project Transition" },
    { label: "Real Life Community Services", href: "https://www.reallcs.org/" },
    { label: "Reading Hospital - Reading Tower Health", href: "https://towerhealth.org/locations/reading-hospital" },
    { label: "Shekinah Haitian SDA Church", href: "https://www.facebook.com/NewShekinahPA/" },
    { label: "Solanco Neighborhood Ministries" },
    { label: "Spanish American Civil Association (SACA)", href: "https://sacapa.org/" },
    { label: "St Thomas Episcopal Church - Lancaster", href: "https://www.stthomaslancaster.org/" },
    { label: "Tenfold" },
    { label: "The Factory Ministries" },
    { label: "The Lodge Life Services", href: "https://lodgelifeservices.org/" },
    { label: "The Loft Community Partnership", href: "https://www.loftcommunitypartnership.org/" },
    { label: "The MIX" },
    { label: "Union Community Care" },
    { label: "Valley Youth House" },
    { label: "Volunteers of America" },
    { label: "Water Street Mission" },
    { label: "YWCA of Greater Harrisburg", href: "https://www.ywcahbg.org/" },
    { label: "York County Reentry Coalition", href: "https://www.yorkreentry.org/" },
    { label: "York Veterans Network" },
  ];

  return (
    <section id="partners" className="py-16 bg-background" aria-label="Our partners">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="text-primary font-semibold text-sm uppercase tracking-widest">
              Our Partners
            </p>
            <h2 className="mt-3 text-2xl md:text-4xl font-bold text-foreground italic">
              Community Partners
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed md:text-lg">
              We appreciate your patience as we work to offer our services to additional agencies and groups. Thank you!
            </p>
          </div>

          <div className="mt-12 rounded-3xl border border-primary/10 bg-warm-light p-6 md:p-10">
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-10">
              {partners.map((partner) => {
                const commonClassName =
                  "mb-4 break-inside-avoid text-sm font-medium text-primary underline underline-offset-4 hover:text-primary/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ring-offset-background";

                if (partner.href) {
                  return (
                    <a
                      key={partner.label}
                      href={partner.href}
                      target="_blank"
                      rel="noreferrer"
                      tabIndex={0}
                      aria-label={`Open partner website: ${partner.label}`}
                      className={commonClassName}
                    >
                      {partner.label}
                    </a>
                  );
                }

                return (
                  <div
                    key={partner.label}
                    className="mb-4 break-inside-avoid text-sm font-medium text-primary underline underline-offset-4"
                  >
                    {partner.label}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityPartnersListSection;

