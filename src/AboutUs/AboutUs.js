import { useEffect } from 'react';
import './AboutUs.css';
import { Divider, Header, Icon } from 'semantic-ui-react';

const AboutUs = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, []);

    return (
        <div id="aboutus">
            <div className="president-section">
                <div className="photo-circle"></div>
                <h2>President's Message</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, 
                    exercitationem. Dolorem molestiae aliquam, autem fugiat maiores porro 
                    numquam impedit expedita cupiditate ab id molestias? Sint vero similique 
                    ab consectetur commodi dolorem iure quo, dolorum assumenda hic ut enim 
                    magnam officia facere neque suscipit? Veniam aliquam et eligendi facere, 
                    quae maxime. Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    In quibusdam possimus et qui quasi. Voluptate culpa harum beatae ipsa, 
                    nostrum accusantium inventore perferendis, facilis cupiditate itaque vero 
                    adipisci sunt odio!</p>
            </div>
            <Divider horizontal>
                <Header as='h2'>
                    <Icon name='handshake' />
                </Header>
            </Divider>
            <div className="club-history">
                <div className="photo-circle"></div>
                <h2 className="history-header">Club History in a nutshell</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum tempore 
                    corporis incidunt voluptatibus eum fuga nostrum hic aliquid asperiores mollitia 
                    aliquam voluptas recusandae explicabo veritatis sint amet sequi laboriosam, 
                    blanditiis accusamus ut officiis quaerat adipisci ad? Nisi saepe doloribus 
                    quaerat consequatur praesentium, officiis quibusdam, atque quo, incidunt ullam aperiam 
                    magni error? Laboriosam quibusdam rem, repellat qui ut ex quod distinctio sapiente 
                    assumenda maxime saepe tenetur debitis veniam nesciunt recusandae, nam veritatis 
                    provident necessitatibus suscipit facere sunt, quae est iusto. Quis asperiores quia 
                    veritatis adipisci inventore nisi. Iure eum aliquid, veritatis, error repudiandae 
                    repellat vero natus perspiciatis libero deleniti magni consequuntur!s
                </p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum tempore 
                    corporis incidunt voluptatibus eum fuga nostrum hic aliquid asperiores mollitia 
                    aliquam voluptas recusandae explicabo veritatis sint amet sequi laboriosam, 
                    blanditiis accusamus ut officiis quaerat adipisci ad? Nisi saepe doloribus 
                    quaerat consequatur praesentium, officiis quibusdam, atque quo, incidunt ullam aperiam 
                    magni error? Laboriosam quibusdam rem, repellat qui ut ex quod distinctio sapiente 
                    assumenda maxime saepe tenetur debitis veniam nesciunt recusandae, nam veritatis 
                    provident necessitatibus suscipit facere sunt, quae est iusto. Quis asperiores quia 
                    veritatis adipisci inventore nisi. Iure eum aliquid, veritatis, error repudiandae 
                    repellat vero natus perspiciatis libero deleniti magni consequuntur!s
                </p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum tempore 
                    corporis incidunt voluptatibus eum fuga nostrum hic aliquid asperiores mollitia 
                    aliquam voluptas recusandae explicabo veritatis sint amet sequi laboriosam, 
                    blanditiis accusamus ut officiis quaerat adipisci ad? Nisi saepe doloribus 
                    quaerat consequatur praesentium, officiis quibusdam, atque quo, incidunt ullam aperiam 
                    magni error? Laboriosam quibusdam rem, repellat qui ut ex quod distinctio sapiente 
                    assumenda maxime saepe tenetur debitis veniam nesciunt recusandae, nam veritatis 
                    provident necessitatibus suscipit facere sunt, quae est iusto. Quis asperiores quia 
                    veritatis adipisci inventore nisi. Iure eum aliquid, veritatis, error repudiandae 
                    repellat vero natus perspiciatis libero deleniti magni consequuntur!s
                </p>
            </div>
            
        </div>
    )
}

export default AboutUs