import {
  Image,
  Modal,
  ModalContent,
  ModalOverlay,
  UseDisclosureProps,
} from '@chakra-ui/react'
import { RisingStrongAnimation } from '../animations'
import { Spinner } from './'

const PreviewImage = ({
  isOpen = false,
  onClose = () => {},
  imageUrl,
}: PreviewImageProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size={'xl'} autoFocus={false}>
      <ModalOverlay backdropFilter='blur(3px)' />
      <ModalContent bg={'transparent'}>
        <RisingStrongAnimation>
          <Image src={imageUrl} fallback={<Spinner />} alt={'project'} />
        </RisingStrongAnimation>
      </ModalContent>
    </Modal>
  )
}

interface PreviewImageProps extends UseDisclosureProps {
  imageUrl: string
}

export { PreviewImage }
