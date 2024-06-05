module.exports = {
  async afterCreate(event) {
    const { result } = event;

    try {
      await strapi.plugins["email"].services.email.send({
        to: "two4fourbfh@gmail.com",
        from: "two4fourbfh@gmail.com",
        subject: "New Inserat Tierbesitzer",
        text: `New Inserat created: ${result.titel}, 
      ${result.tierart},
      ${result.alter},
      ${result.zeitdauer_von_bis},
      ${result.beschreibung_wichtiger_infos},
      ${result.totalbetrag_chf},
      ${result.tierrasse},
      ${result.tiername} ,
      ${result.bild},
      ${result.user.username}`,
      });
    } catch (error) {
      console.error(result);
      // handle error
    }
  },
};
