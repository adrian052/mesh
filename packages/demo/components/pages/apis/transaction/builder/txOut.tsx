import Section from '../../../../common/section';
import Codeblock from '../../../../ui/codeblock';

export default function TxOut() {
  return (
    <Section
      sidebarTo="txOut"
      header="Set output for transaction"
      contentFn={Content()}
    />
  );
}

function Content() {
  let code = `mesh
  .txOut(address: string, amount: Asset[])`;
  let codeWithScript = `mesh
  .txOut(address: string, amount: Asset[])
  .txOutReferenceScript(scriptCbor: string)`;

  let codeWithDatum = `mesh
  .txOut(address: string, amount: Asset[])
  .txOutDatumHashValue(datum: Data | object | string, type?: type: "Mesh" | "CBOR" | "JSON") 
    // or .txOutInlineDatumValue(datum: Data | object | string, type?: "Mesh" | "CBOR" | "JSON")
`;

  return (
    <>
      <p>
        <code>txOut()</code> is used in its basic form as follows. You could
        provide empty array or only native token to <code>amount: Asset[]</code>
        , in that case the minUTxO needed would be calculated automatically at
        complete.
      </p>

      <Codeblock data={code} isJson={false} />
      <h3>Attaching datum in output</h3>
      <p>
        You can attach datum to this transaction output by using either
        <code>.txOutDatumHashValue()</code> or{' '}
        <code>.txOutInlineDatumValue()</code>
      </p>
      <Codeblock data={codeWithDatum} isJson={false} />
      <h3>Attaching script in output for referencing</h3>
      <p>
        You can attach a reference script to the output using
        <code>.txOutReferenceScript()</code>
      </p>
      <Codeblock data={codeWithScript} isJson={false} />
    </>
  );
}
