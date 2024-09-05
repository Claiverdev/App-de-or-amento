programa {
  inclua biblioteca Matematica --> Mat

  funcao inicio() 
  {
    real c,l,ex,ct,x,p,lucro,q
    inteiro unidade

    escreva("Digite o Comprimento (m): ")
    leia(c)
    escreva("Digite a Largura (m): ")
    leia(l)
    escreva("Digite a espesurra (cm): ")
    leia(ex)
    
    x = c*l*(ex/100)
    ct = x*235
    p = ct*1.7
    p = Mat.arredondar(p,2)
    escreva("O preço da unidade é R$ ",p,"\n")
    escreva("Quantas peças o cliente irá querer? ")
    leia(unidade)
    q = unidade*p
    q = Mat.arredondar(q,2)
    escreva("O preço total é de R$ ",q)
  }
}
