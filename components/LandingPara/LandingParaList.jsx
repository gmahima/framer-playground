import { LandingPara } from "./LandingPara";

export const LandingParaList = () => {
  let list = []; 
  for (let i = 0; i < 10; i++) {
    list.push (
      <LandingPara key={i} dir={i % 2 == 0 ? "left" : "right"}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Velit dignissim
        sodales ut eu sem integer vitae justo. Sapien pellentesque habitant
        morbi tristique senectus et netus et. Dignissim diam quis enim lobortis
        scelerisque. Feugiat pretium nibh ipsum consequat nisl vel pretium
        lectus quam. Pellentesque massa placerat duis ultricies. Neque aliquam
        vestibulum morbi blandit cursus risus at ultrices mi. Sem nulla pharetra
        diam sit. Egestas dui id ornare arcu odio ut sem nulla. Aenean euismod
        elementum nisi quis eleifend quam adipiscing. Integer vitae justo eget
        magna fermentum iaculis. Mauris a diam maecenas sed. Nibh nisl
        condimentum id venenatis a condimentum vitae sapien pellentesque.
        Facilisis leo vel fringilla est ullamcorper eget. Tempus iaculis urna id
        volutpat lacus laoreet non curabitur. Velit dignissim sodales ut eu sem
        integer. In ornare quam viverra orci sagittis eu. Arcu non sodales neque
        sodales ut etiam. Nibh tortor id aliquet lectus proin nibh nisl
        condimentum id. Cursus risus at ultrices mi tempus imperdiet. Porttitor
        massa id neque aliquam. Congue eu consequat ac felis. Eget arcu dictum
        varius duis at consectetur. Vel turpis nunc eget lorem dolor sed
        viverra. Venenatis lectus magna fringilla urna. Eu consequat ac felis
        donec et odio pellentesque. Lectus sit amet est placerat in egestas erat
        imperdiet. Aliquam sem et tortor consequat id porta nibh venenatis.
        Mauris augue neque gravida in fermentum et sollicitudin ac. Tortor id
        aliquet lectus proin nibh nisl condimentum id venenatis. Amet justo
        donec enim diam. Quis enim lobortis scelerisque fermentum dui faucibus
        in ornare. Suspendisse sed nisi lacus sed viverra tellus in hac.
        Consequat semper viverra nam libero justo laoreet sit. Morbi tincidunt
        augue interdum velit euismod in pellentesque. Malesuada fames ac turpis
        egestas sed tempus urna et. Tincidunt id aliquet risus feugiat. Purus
        gravida quis blandit turpis. Gravida cum sociis natoque penatibus et
        magnis dis parturient. Lacus viverra vitae congue eu. Porttitor rhoncus
        dolor purus non. Risus quis varius quam quisque id diam. Neque egestas
        congue quisque egestas diam in arcu. Morbi blandit cursus risus at
        ultrices. Lobortis feugiat vivamus at augue. Molestie ac feugiat sed
        lectus vestibulum mattis ullamcorper velit. Facilisi etiam dignissim
        diam quis enim lobortis scelerisque fermentum. Vel pharetra vel turpis
        nunc eget lorem. Turpis nunc eget lorem dolor sed viverra. Phasellus
        faucibus scelerisque eleifend donec pretium vulputate sapien nec
        sagittis. Dolor sit amet consectetur adipiscing elit ut aliquam. Leo in
        vitae turpis massa sed elementum tempus egestas. Non odio euismod
        lacinia at quis risus sed vulputate odio. Viverra mauris in aliquam sem
        fringilla ut morbi tincidunt. Diam quam nulla porttitor massa. Eu
        tincidunt tortor aliquam nulla. Mauris cursus mattis molestie a. Amet
        commodo nulla facilisi nullam vehicula ipsum. Quam as parturient. Lacus viverra vitae congue eu. Porttitor rhoncus
        dolor purus non. Risus quis varius quam quisque id diam. Neque egestas
        congue quisque egestas diam in arcu. Morbi blandit cursus risus at
        ultrices. Lobortis feugiat vivamus at augue. Molestie ac feugiat sed
        lectus vestibulum mattis ullamcorper velit. Facilisi etiam dignissim
        diam quis enim lobortis scelerisque fermentum. Vel pharetra vel turpis
        nunc eget lorem. Turpis nunc eget lorem dolor sed viverra. Phasellus
        faucibus scelerisque eleifend donec pretium vulputate sapien nec
        sagittis. Dolor sit amet consectetur adipiscing elit ut aliquam. Leo in
        vitae turpis massa sed elementum tempus egestas. Non odio euismod
        lacinia at quis risus sed vulputate odio. Viverradipiscing vitae
        proin sagittis. Parturient montes nascetur ridiculus mus. Sapien
        faucibus et molestie ac feugiat sed lectus vestibulum. Laoreet
        suspendisse interdum consectetur libero id faucibus.
      </LandingPara>
    );
  }
  return list;
};
