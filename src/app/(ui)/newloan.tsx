

export default function NewLoan() {
    return (
        <div style={{ display: 'flex', gap: '1rem' }}>
            <input
                type="number"
                placeholder="Loan Amount"
                style={{ padding: '0.5rem', flex: 1 }}
            />
            <input
                type="number"
                placeholder="Interest Rate"
                style={{ padding: '0.5rem', flex: 1 }}
            />
            <input
                type="number"
                placeholder="Payment Amount"
                style={{ padding: '0.5rem', flex: 1 }}
            />
        </div>
    );
};
