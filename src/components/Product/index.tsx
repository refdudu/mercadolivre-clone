import React from "react";

import {
  Container,
  Row,
  Panel,
  Column,
  Gallery,
  Section,
  Description,
} from "./styles";

import tshirtImage from "../../assets/tshirt.png";
import SellerInfo from "../SellerInfo";
import ProductAction from "../ProductAction";

const Product: React.FC = () => {
  return (
    <Container>
      <Row>
        <a href="#">Compartilhar</a>
        <a href="#">Vender um igual</a>
      </Row>
      <Panel>
        <Column>
          <Gallery>
            <img src={tshirtImage} alt="T-Shirt" />
          </Gallery>
          <Info />
        </Column>
        <Column>
          <ProductAction/>
          <SellerInfo/>
          <WarrantySection />
          <WarrantySection />
          <WarrantySection />
        </Column>
      </Panel>
    </Container>
  );
};
const WarrantySection = () => (
  <Section>
    <h4>Garantia</h4>
    <div>
      <span>
        <p className="title">Compra garantida com o Lorem Ipsum</p>
        <p className="description">
          Receba o produto que está esperando ou devolvemos o seu dinheiro
        </p>
      </span>
      <span>
        <p className="title">Compra garantida do vendedor</p>
        <p className="description">Sem garantia</p>
      </span>
    </div>
    <a href="#">Saiba mais sobre garantia</a>
  </Section>
);
const Info = () => (
  <Description>
    <h2>Descrição</h2>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error velit
      tempore, culpa minus perferendis quidem necessitatibus natus veritatis
      omnis facilis eaque, tenetur repellendus blanditiis maxime quaerat.
      Reiciendis nulla labore magni.
    </p>
    <br />
    <br />
    Itens inclusos <br />
    - 1x LED <br />
    - 1x LED <br />
    - 1x LED <br />
    - 1x LED <br />
    - 1x LED <br />
    <br />
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, architecto
    nisi sit incidunt, quis beatae maiores obcaecati fugit non cumque
    consequatur, odio quisquam quibusdam iste eveniet distinctio labore iusto
    eos? Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo,
    pariatur sint enim eveniet totam recusandae dignissimos, molestias aliquid
    fugit quo iure magni fugiat illum itaque doloremque rem nisi, nemo maiores!
  </Description>
);
export default Product;
