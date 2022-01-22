import {DetailedHTMLProps, HTMLAttributes} from 'react'

export interface ModalLoginProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    closeModal: () => void
}