module.exports = {
  async afterCreate(event) {
    const { result } = event;

    try {
      await strapi.plugins["email"].services.email.send({
        to: "two4fourbfh@gmail.com",
        from: "two4fourbfh@gmail.com",
        subject: "New Inserat Tiersitter",
        text: `New Inserat created: ${result.titel},
        ${result.persoenliche_beschreibung},
        ${result.verfuegbarkeit},
        ${result.lohnkosten},
        ${result.bild},
        ${result.user}  `,
      });
    } catch (error) {
      console.error(error);
      // handle error
    }
  },
};
