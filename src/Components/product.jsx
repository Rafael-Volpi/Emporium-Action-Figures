import React from 'react';
import ProductList from './product_list';
import spiderman from '../img/spiderman.jpg'
import batman from '../img/batman.jpg'
import blackpanther from '../img/blackpanther.jpg'
import buzz from '../img/buzz.jpg'
import captainamerica from '../img/captainamerica.jpg'
import captainmarvel from '../img/captainmarvel.jpg'
import daredevil from '../img/daredevil.jpg'
import darthmaul from '../img/darthmaul.jpg'
import darthvader from '../img/darthvader.jpg'
import deadpool from '../img/deadpool.jpg'
import doctorstrange from '../img/doctorstrange.jpg'
import elsa from '../img/elsa.jpg'
import groot from '../img/groot.jpg'
import harrypotter from '../img/harrypotter.jpg'
import homer from '../img/homer.jpg'
import hulk from '../img/hulk.jpg'
import ironman from '../img/ironman.jpg'
import joker from '../img/joker.jpg'
import superman from '../img/superman.jpg'
import thanos from '../img/thanos.jpg'
import thor from '../img/thor.jpg'
import venom from '../img/venom.jpg'
import wolverine from '../img/wolverine.jpg'
import wonderwoman from '../img/wonderwoman.jpg'



const product = ( ) => {
    return (
        <div className= 'product-body'>
<div className="category-section">
    <h4>Action Figures</h4>
    <div className="product-list-container">
        <ProductList name='Spider-Man' price='199,99' description='Action Figure articulado do Homem-Aranha com 20 cm de altura e base inclusa.' image= {spiderman} />
        <ProductList name='Batman' price='249,99' description='Figura detalhada de Batman em combate, com capa de tecido e múltiplos acessórios.' image= {batman} />
        <ProductList name='Iron Man' price='299,99' description='Action Figure do Homem de Ferro com iluminação nos olhos e nas mãos.' image= {ironman} />
        <ProductList name='Wonder Woman' price='179,99' description='Figura articulada da Mulher Maravilha com laço dourado e espada removível.' image= {wonderwoman} />
        <ProductList name='Thor' price='319,99' description='Action Figure de Thor com martelo Mjolnir, base e efeitos de raios.' image= {thor}/>
        <ProductList name='Hulk' price='349,99' description='Figura gigante de Hulk com 25 cm de altura e expressão de raiva.' image= {hulk}/>
        <ProductList name='Captain America' price='229,99' description='Action Figure do Capitão América com escudo e uniforme clássico.' image= {captainamerica}/>
        <ProductList name='Black Panther' price='279,99' description='Figura detalhada de Black Panther com traje de vibranium e base decorativa.' image= {blackpanther}/>
    </div>
</div>

<div className="category-section">
    <h4>Estátuas</h4>
    <div className="product-list-container">
        <ProductList name='Thanos' price='599,99' description='Estátua detalhada de Thanos com a Manopla do Infinito e base temática.' image= {thanos}/>
        <ProductList name='Darth Vader' price='749,99' description='Estátua de Darth Vader com sabre de luz vermelho e capa fluida.' image= {darthvader}/>
        <ProductList name='The Joker' price='459,99' description='Estátua do Coringa rindo com um baralho de cartas e base personalizada.' image= {joker}/>
        <ProductList name='Superman' price='679,99' description='Estátua do Superman em pose de voo, com capa de tecido e base dinâmica.' image= {superman}/>
        <ProductList name='Groot' price='499,99' description='Estátua de Groot bebê com detalhes realistas e base em formato de galho.' image= {groot}/>
        <ProductList name='Wolverine' price='529,99' description='Estátua do Wolverine em ação, com garras de adamantium e base de batalha.' image= {wolverine}/>
        <ProductList name='Venom' price='799,99' description='Estátua de Venom com detalhes monstruosos e uma base que simula o simbionte.' image= {venom}/>
        <ProductList name='Doctor Strange' price='699,99' description='Estátua do Doutor Estranho conjurando feitiços com detalhes luminosos.' image= {doctorstrange}/>
    </div>
</div>

<div className="category-section">
    <h4>Funko Pop</h4>
    <div className="product-list-container">
        <ProductList name='Harry Potter' price='99,99' description='Funko Pop do Harry Potter segurando sua varinha e óculos icônicos.' image= {harrypotter}/>
        <ProductList name='Darth Maul' price='89,99' description='Funko Pop do Darth Maul com sabre de luz duplo em pose de combate.' image= {darthmaul}/>
        <ProductList name='Elsa (Frozen)' price='69,99' description='Funko Pop da Elsa com vestido de gelo e detalhes de neve.' image= {elsa}/>
        <ProductList name='Buzz Lightyear' price='89,99' description='Funko Pop do Buzz Lightyear com traje espacial e pose de ação.' image= {buzz}/>
        <ProductList name='Deadpool' price='79,99' description='Funko Pop do Deadpool com suas espadas e pose irreverente.' image= {deadpool}/>
        <ProductList name='Homer Simpson' price='59,99' description='Funko Pop do Homer Simpson segurando um donut.' image= {homer}/>
        <ProductList name='Captain Marvel' price='89,99' description='Funko Pop da Capitã Marvel com traje estrelado e base flutuante.' image= {captainmarvel}/>
        <ProductList name='Daredevil' price='99,99' description='Funko Pop do Demolidor com seu traje vermelho e seus bastões.' image= {daredevil}/>
    </div>
</div>

    </div>
    )
}

export default product;