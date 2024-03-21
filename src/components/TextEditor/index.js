import {Component} from 'react'
import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'
import {
  MainContainer,
  CardContainer,
  ImageContainer,
  Heading,
  Image,
  TextArea,
  TextareaContainer,
  ButtonsContainer,
  ButtonCustom,
  HarizontalLine,
  ButtonItalic,
  ButtonUnderline,
  ListItem
} from './styledComponent'

class TextEditor extends Component {
  state = {isBold: false, isItalic: false, isUnderline: false}

  changeButton = () => {
    this.setState(prevState => ({isBold: !prevState.isBold}))
  }

  changeButtonItalic = () => {
    this.setState(prevState => ({isItalic: !prevState.isItalic}))
  }

  changeButtonUnderline = () => {
    this.setState(prevState => ({isUnderline: !prevState.isUnderline}))
  }

  render() {
    const {isBold, isItalic, isUnderline} = this.state
    return (
      <MainContainer>
        <CardContainer>
          <ImageContainer>
            <Heading>Text Editor</Heading>
            <Image
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
            />
          </ImageContainer>
          <TextareaContainer>
            <ButtonsContainer>
            <ListItem>
              <ButtonCustom
                isBold={isBold}
                data-testid="bold"
                onClick={this.changeButton}
              >
                <VscBold size={30} />
              </ButtonCustom>
            </ListItem>
            <ListItem>
               <ButtonItalic
                isItalic={isItalic}
                data-testid="italic"
                onClick={this.changeButtonItalic}
              >
                <GoItalic size={30} />
              </ButtonItalic>
            </ListItem>
              <ListItem>
                <ButtonUnderline
                isUnderline={isUnderline}
                data-testid="underline"
                onClick={this.changeButtonUnderline}
              >
                <AiOutlineUnderline size={30} />
              </ButtonUnderline>
              </ListItem>
             
              
            </ButtonsContainer>
            <HarizontalLine />
            <TextArea
              isBold={isBold}
              isItalic={isItalic}
              isUnderline={isUnderline}
              cols="50"
              rows="24"
            />
          </TextareaContainer>
        </CardContainer>
      </MainContainer>
    )
  }
}
export default TextEditor
