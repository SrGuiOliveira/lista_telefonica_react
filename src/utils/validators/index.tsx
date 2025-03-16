import Contact from '../../models/contact'

export const validateContact = (
  nome: string,
  telefone: string,
  contacts: Contact[]
): string | null => {
  if (nome.length < 2) {
    return 'Insira um nome válido para o contato.'
  }
  if (telefone.length < 10) {
    return 'Insira um número válido! Com DDD exemplo (99) 9999-9999 ou (99) 99999-9999.'
  }
  if (contacts.some((contact) => contact.telefone === Number(telefone))) {
    return 'Este telefone já está registrado para outro contato.'
  }
  return null
}
