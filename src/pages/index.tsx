import CVEntry from "@/components.tsx/cventry";
import ListTable from "@/components.tsx/listtable";
import MainCol from "@/components.tsx/maincol";
import Navbar from "@/components.tsx/navbar";
import Publication from "@/components.tsx/publication";
import Head from "next/head";
export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <Navbar/>
      <MainCol>
        <a id="top"/><h3>Simon Pohmann</h3>
        
        <ListTable>
          <tr>
            <th scope="row" className="row-header-responsive">Email</th>
            <td>Simon.Pohmann.2022@live.rhul.ac.uk</td>
          </tr>
          <tr>
            <th scope="row" className="row-header-responsive">Research Interests</th>
            <td>Cryptography, Computational Mathematics</td>
          </tr>
          <tr>
            <th scope="row" className="row-header-responsive">Current Affiliation</th>
            <td>Royal Holloway, University of London</td>
          </tr>
        </ListTable>

        <div className="container-fluid py-4">
          <div className="row gy-4 justify-content-center">
            <div className="col-12 col-lg-4 col-xxl-3 col-xxxl-3 col-xxxxl-2 text-center">
              <img className="w-lg-100 w-sm-50 w-75" height="auto" src="me.png"/>
            </div>
            <div className="col-1 d-xxxl"/>
            <div className="col-12 col-lg-8 col-xxl-6 col-xxxl-4 col-xxxxl-3">
              I'm Simon Pohmann, and I am currently a PhD in Cryptography student at Royal Holloway.
              I have a background in Mathematics, and my current research is on both theoretical and implementation aspects of lattice-based cryptography, in particular Fully Homomorphic Encryption (FHE).
              I'm the author of the <a href="https://crates.io/crates/feanor-math">feanor-math</a> and <a href="https://crates.io/crates/fheanor">fheanor</a> Rust libraries for computational mathematics and FHE, respectively.
              On the theoretical side, I am investigating efficient polynomial evaluation in the context of FHE, and in particular Doubly-Efficient Private Information Retrieval.
            </div>
          </div>
        </div>

        <a id="publications"/><h3 className="pt-4">Publications</h3>

        <ListTable>
          <Publication shorthand="OPP25" link="https://ia.cr/2025/864">
            H. Okada, R. Player, and S. Pohmann. “Fheanor: a new, modular FHE library for designing and optimising schemes”. In: Cryptology ePrint Archive (2025).
          </Publication>
          <Publication shorthand="OPPW25" link="https://ia.cr/2024/1307">
            H. Okada, R. Player, S. Pohmann, and C. Weinert. “On algebraic homomorphic encryption and its applications to doubly-efficient PIR”. In: Annual International Conference on the Theory and Applications of Cryptographic Techniques. Springer. 2025, pp. 34-64.
          </Publication>
          <Publication shorthand="OPPW24" link="https://ia.cr/2023/1510">
            H. Okada, R. Player, S. Pohmann, and C. Weinert. “Towards practical doubly-efficient private information retrieval”. In: International Conference on Financial Cryptography and Data Security. Springer. 2024, pp. 264-282.
          </Publication>
          <Publication shorthand="OPP23" link="https://ia.cr/2023/1304">
            H. Okada, R. Player, and S. Pohmann. “Homomorphic polynomial evaluation using Galois structure and applications to BFV bootstrapping”. In: International Conference on the Theory and Application of Cryptology and Information Security. Springer. 2023, pp. 69-100.
          </Publication>
          <Publication shorthand="P22" link="www.maths.ox.ac.uk/system/files/inline-files/S%20Pohmann%2021-22.pdf" linkdesc="ox.ac.uk">
            S. Pohmann. “Generating supersingular curves with modular polynomials”. MA thesis. Oxford University. 2022.
          </Publication>
          <Publication shorthand="PSZ21" link="https://ia.cr/2021/430">
            S. Pohmann, M. Stevens, and J. Zumbrägel. “Lattice enumeration on gpus for fplll”. In: Cryptology ePrint Archive (2021).
          </Publication>
        </ListTable>
        <i>Authors are ordered alphabetically.</i>

        <a id="talks"/><h3 className="pt-4">Talks and Posters</h3>

        <ListTable>
          <Publication shorthand="25/03/2025">
          On algebraic homomorphic encryption and its applications to doubly-efficient PIR”. Poster Presentation at FHE.org 2025.
          </Publication>
          <Publication shorthand="06/03/2024">
            “Towards practical doubly-efficient private information retrieval”. Conference Presentation at Financial Cryptography 2024.
          </Publication>
          <Publication shorthand="06/12/2023">
            “Homomorphic polynomial evaluation using Galois structure and applications to BFV bootstrapping”. Conference Presentation at ASIACRYPT 2023.
          </Publication>
        </ListTable>

        <a id="experience"/><h3 className="pt-2">Experience and Education</h3>

        <ListTable>
          <CVEntry from={2022} to="now">
            PhD in the Information Security Group at Royal Holloway, University of London. Supervised by <a href="https://rachelplayer.github.io/">Dr Rachel Player</a>.
          </CVEntry>
          <CVEntry from={2025} detailedDate="01/04 - 28/06">
            Internship at KDDI Research, Tokyo.
          </CVEntry>
          <CVEntry from={2021} to={2022}>
            M.Sc. in Mathematics and Foundations of Computer Science at Oxford University, UK. Final Grade: Distinction.
          </CVEntry>
          <CVEntry from={2020} to={2021}>
            M.Sc. in Computational Mathematics at University of Passau, Germany. Discontinued because of above offer from Oxford; Preliminary Grade 1.0.
          </CVEntry>
          <CVEntry from={2018} to={2020}>
            B.Sc. in Mathematics at University of Passau, Germany. Final Grade: 1.0.
          </CVEntry>
          <CVEntry from={2017} to={2020}>
            B.Sc. in Computer Science at University of Passau, Germany. Final Grade: 1.0.
          </CVEntry>
          <CVEntry from={2017} to={2019}>
            Working student at msg systems, Passau, Germany.
          </CVEntry>
        </ListTable>

      </MainCol>
    </>
  );
}
