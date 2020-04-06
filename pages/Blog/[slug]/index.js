import Header from 'components/Header'
import Footer from 'components/Footer'
import { useRouter } from 'next/router'
import { Content, Title, Text } from './styles.js'

const BlogPost = () => {
  const router = useRouter()
  const { slug } = router.query

  return (
    <>
      <Header intern />
      <Content>
        <Title>Criando API REST com Rails 5</Title>
        <Text>
        A partir da versão 5, o Rails oferece suporte a aplicativos de API, em versões anteriores, era preciso adicionarmos uma gem externa: rails-api, que desde então foi incorporada ao Rails Core. <br/><br/>
        As aplicações de API são reduzidas em comparação com as aplicações Web Rails tradicionais. De acordo com as notas de versão do Rails 5, a geração de uma aplicação API apenas irá:
        </Text>
      </Content>
      <Footer/>
    </>
  )
}

export default BlogPost;