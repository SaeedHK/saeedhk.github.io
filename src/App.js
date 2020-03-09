import PropTypes from 'prop-types'
import React, { Component } from 'react'
import {
  Button,
  Container,
  Grid,
  Header,
  Icon,
  Menu,
  Responsive,
  Segment,
  Visibility
} from 'semantic-ui-react'

const HomepageHeading = ({ mobile }) => (
  <Container text>
    <Header
      as='h1'
      content='یک فنجان قهوه با چاشنی حقوق'
      inverted
      style={{
        fontSize: mobile ? '1em' : '3em',
        fontWeight: 'normal',
        marginBottom: 0,
        marginTop: mobile ? '1.5em' : '3em',
      }}
    />
    <Header
      as='h2'
      content='با من باشید با هفته ای یک پادکست'
      inverted
      style={{
        fontSize: mobile ? '1.5em' : '1.7em',
        fontWeight: 'normal',
        margin: mobile ? '0.5em' : '1.5em',
      }}
    />
  </Container>
)

HomepageHeading.propTypes = {
  mobile: PropTypes.bool,
}

function handleClick(id)
{
  document.querySelector("#" + id).scrollIntoView({behavior: 'smooth'});
}

const MenuBar = () => (
  <Menu
  // fixed = 'top'
  secondary
  inverted
  // pointing
  size='large'>
  <Container>
    <Menu.Item as='a' onClick={() => handleClick('podcasts')}>پادکست</Menu.Item>
    <Menu.Item as='a' onClick={() => handleClick('about')}>درباره من</Menu.Item>
    <Menu.Item as='a' onClick={() => handleClick('support')}>حمایت</Menu.Item>
  </Container>
</Menu>


)

/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */
class DesktopContainer extends Component {
  render() {
    const { children } = this.props
    return (
      <Responsive>
        <Visibility
          once={false}
        >
          <Segment
            inverted
            color='teal'
            textAlign='center'
            style={{ minHeight: 700, padding: '1em 0em' }}
            vertical
          >
            <MenuBar />
            <HomepageHeading />
          </Segment>
        </Visibility>
        {children}
      </Responsive>
    )
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node,
}

const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
   </div>
)

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
}

const Podcast = () => (
  <Segment secondary>
    <Grid container stackable>
      <Grid.Row>
        <Header as='h4' textAlign='center' style={{ marginBottom: '1em' }} >
        درس گفتار اول
        </Header>
        <p>
          حقوق مجموعه قواعدی ست که از طریق موسسات اجتماعی یا دولتی، جهت تنظیم رفتار ایجاد و اعمال می‌شود. علم حقوق، دانش تحلیل و سیر تحول قواعد حقوقی ست.[۱] حقوق، مجموعه قواعد و مقرراتی است که نظم اجتماعی را تأمین می‌کند.[۲] حقوق در نظام‌های حقوقی ملی به روش‌های مختلفی ایجاد می‌شود؛ از طریق وضع یا نسخ قانون توسط قوه مقننه، از طریق صدور آئین‌نامه‌ها و بخشنامه‌های دولتی در قوه مجریه، و تصمیمات قضایی الزام‌آور در قوه قضائیه (که این روش آخر در نظام‌های کامن‌لا اهمیت بیشتری دارد). اشخاص خصوصی هم می‌توانند قراردادهای الزام‌آور قانونی را میان خود ایجاد کنند و در برخی وضعیت‌ها با توافق یکدیگر سیستم‌های میانجی‌گری را جایگزین فرایند معمول دادگستری کنند. قانون اساسی نقش انکارناپذیری در شکل‌گیری نظام حقوقی هر کشور دارد و نظام حقوقی نیز به نوبه خود شکل‌دهنده سیاست، اقتصاد و جامعه است و روابط میان افراد را هدایت می‌کند.
        </p>
      </Grid.Row>
      <Grid.Row>
        <Button color='teal' as='a'>
          دریافت صوت
        </Button>
        <Button color='teal' as='a'>
          دریافت متن
        </Button>
      </Grid.Row>
    </Grid>
  </Segment>
  )

const Podcasts = () => (
<Segment style={{ padding: '4em 0em' }} vertical id="podcasts">
  <Header as='h1' textAlign='center'> 
  پادکستها 
  </Header>
  <Header as='h3' textAlign='center' style={{ marginBottom: '3em' }}>
      هر پادکست شامل یک فایل صوتی و یک فایل متنی میباشد. برای دریافت هر کدام روی 
      گزینه مناسب کلیک بفرمایید. 
  </Header>
  <Grid container stackable>
    <Grid.Row>
      <Podcast />
    </Grid.Row>
    <Grid.Row>
      <Podcast />
    </Grid.Row>
  </Grid>
</Segment>
)

const About = () => (
  <Segment style={{ padding: '4em 0em' }} vertical id="about">
    <Header as='h1' textAlign='center'> 
    درباره من 
    </Header>
    <Header as='h4' textAlign='center'>
    من هادی وحید هستم. 
    </Header>
  </Segment>
  )

const Support = () => (
  <Segment style={{ padding: '4em 0em' }} vertical id="support">
    <Header as='h1' textAlign='center'> 
      حمایت
    </Header>
    <Header as='h3' textAlign='center'>
      در صورت تمایل میتوانید این سایت را طریق لینک زیر حمایت کنید.
    </Header>
    <Container style={{ marginTop: '3em' }} textAlign='center'>
    <Button>
          حمایت مالی
          <Icon name='paypal' />
    </Button>
    </Container>

  </Segment>
  )

const Footer = () => (
  <Segment inverted vertical style={{ padding: '3em 0em' }} textAlign='center' id="footer">
    <Container textAlign='center'>
      <Icon link name='instagram' size='big'/>
      <Icon link name='twitter' size='big'/>
    </Container>
  </Segment>
)
  

const HomepageLayout = () => (
  <ResponsiveContainer>
    <Podcasts />
    <About />
    <Support />
    <Footer />
  </ResponsiveContainer>
)

export default HomepageLayout
