---
title: Scoping in New Ithkuil
---

Referentials and Suppletive Adjuncts serve the same syntactic function as Formatives (Although they can only convey `CCN` case-scope). Should their Slot lack the capacity to convey the necessary morphological information, it is recommended to utilize alternative Formatives or to apply Affix(ual Adjunct)s to meet the requirements.

Register Adjuncts have the ability to govern any designated noun, single Formative, phrase, clause, or sentence, including Register clauses. Register Initial Adjunct and Register Final Adjunct encapsulate the governed content. A Register clause frequently imparts semantic insights to an adjoining verb or noun; however, it should not be assumed that these words hold scope over the Register clause. Given that a Register clause functions as a parenthetical and self-contained sentence, its removal does not disrupt the overall message conveyed by the original sentence. These clauses have the flexibility to be situated at any point within a sentence, and may even function as standalone sentences. A typical illustration of this is the <abbr>NRR</abbr> Register, which, being the default  Register, is frequently disregarded; thus, it is prudent to presume that any sentence, including sentences enclosed by Non-<abbr>NNR</abbr>, is <abbr>NNR</abbr>-marked. It is advisable to consider every sentence as being governed by the Register, typically the <abbr>NNR</abbr>. As <abbr>NNR</abbr> is signified by the zero marker, a <abbr>NNR</abbr> clause is inherently autonomous, not subject to subordination by other Register clauses, yet capable of exerting influence over each one individually.

A Sentence-Initial Bias governs the entirety of the sentence, rather than the <abbr>NRR</abbr> Register. Bias(es) can form a sentence, but should still be <abbr>NNR</abbr>-marked.

<div class="indent">
<dl class="gloss">
    <dt>∅</dt>
    <dd>NRR</dd>
</dl>
<dl class="gloss">
    <dt>(Çë)rral.</dt>
    <dd>([sentence:]​-)“cat”-OBS</dd>
</dl>
<dl class="gloss">
    <dt>∅</dt>
    <dd>NRR_END</dd>
</dl>
<div class="glend">A simple sentence</div>
<dl class="gloss">
    <dt>∅</dt>
    <dd>NRR</dd>
</dl>
<dl class="gloss">
    <dt>(Çë)hi</dt>
    <dd>([sentence:]​-)SPF</dd>
</dl>
<dl class="gloss">
    <dt>...</dt>
    <dd>...</dd>
</dl>
<dl class="gloss">
    <dt>hiu.</dt>
    <dd>SPF_END</dd>
</dl>
<dl class="gloss">
    <dt>∅</dt>
    <dd>NRR_END</dd>
</dl>
<div class="glend">A sentence composed of single Register clause</div>
<dl class="gloss">
    <dt>∅</dt>
    <dd>NRR</dd>
</dl>
<dl class="gloss">
    <dt>(Çë)lf</dt>
    <dd>([sentence:]​-)ACC</dd>
</dl>
<dl class="gloss">
    <dt>lst.</dt>
    <dd>ANP</dd>
</dl>
<dl class="gloss">
    <dt>∅</dt>
    <dd>NRR_END</dd>
</dl>
<div class="glend">A sentence composed of Biases</div>
</div>

```mermaid
---
title: A Sentence Incl. All Parts Of Words
---

flowchart TB
    subgraph rc[Register clause]
        direction TB
        rcc(Register Adjunct)
        cw(Content Within)
        rcc-.->cw
    end
    register("`Register (usually NRR)`")
    bias("`Sentence-Initial Bias (Stackable many times)`")
    register-.->bias-.->|governs the whole sentence|v
    v-->|CCN|rf[Referential]
    subgraph sp[Suppletive phrase]
        direction TB
        scc(Suppletive Adjunct)
        cc(Carried Content)
        scc-.->|carries|cc
    end
    v[Verbal Formative In Main Clause]
    v-->|CCN|sc[Any Suppletive clause]
    fpf["`**Single Formative**
    OR **Any Phrase**
    OR **Any Frame**`"]
    v-->|CCN/CCA/CCS|fpf
    af["`Adjacent Formative(s)`"]
    v-->|CCP/CCV|af
```


```mermaid
---
title: Stem₁ Stem₂-COO
---

flowchart LR
    subgraph ph[Phrase]
     direction RL
        subgraph f1[Formative₁]
        a[S₁]
        end
        subgraph f2[Formative₂]
        direction LR
        b[COO]
        c[S₂]
        b-->c
        end
    b -.-> f1
    end
    v[verb₁]-->ph

    class a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z styl;
    classDef styl fill:#a07cda,stroke:#a07cda
```
