import WebFont from "webfontloader";

const FontLoader = () => {
  WebFont.load({
    google: {
      families: ['Roboto:300,400,700', 
      'Lobster: 300,400,700', 
      'Banger: 300, 400, 700', 
      'Lobster Two: 300, 400, 700',
      'Anton: 300, 400, 700',
      'Luckiest Guy: 300, 400, 700', 
      'curisve']
     

    }
  });
  return null;
};

export default FontLoader;
