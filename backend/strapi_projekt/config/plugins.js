module.exports = ({ env }) => ({
  email: {
    config: {
      provider: "sendgrid",
      providerOptions: {
        apiKey: env("SENDGRID_API_KEY"),
      },
      settings: {
        defaultFrom: "two4fourbfh@gmail.com",
        defaultReplyTo: "two4fourbfh@gmail.com",
        testAdress: "two4fourbfh@gmail.com",
      },
    },
  },
  "email-designer": {
    enabled: true,
    config: {
      editor: {
        tools: {
          heading: {
            properties: {
              text: {
                value: "This is the new default text!",
              },
            },
          },
        },
        options: {
          features: {
            colorPicker: {
              presets: ["#D9E3F0", "#F47373", "#697689", "#37D67A"],
            },
          },
          fonts: {
            showDefaultFonts: false,
            customFonts: [
              {
                label: "Anton",
                value: "'Anton', sans-serif",
                url: "https://fonts.googleapis.com/css?family=Anton",
              },
              {
                label: "Lato",
                value: "'Lato', Tahoma, Verdana, sans-serif",
                url: "https://fonts.googleapis.com/css?family=Lato",
              },
              // ...
            ],
          },
          mergeTags: [
            {
              name: "Email",
              value: "{{ USER.username }}",
              sample: "john@doe.com",
            },
            // ...
          ],
        },
        appearance: {
          theme: "dark",
          panels: {
            tools: {
              dock: "left",
            },
          },
        },
      },
    },
  },
});
