export default function OptionSwitch({type, setType}){
    return (
        <>
            {type == "signIn" ? (
                <p 
                    className="fs-6 text-highlight text-center text-dark"
                    onClick={() => setType("signUp")}
                >
                    Зареєструватись
                </p>
            ) : (
                <p 
                    className="fs-6 text-highlight text-center text-dark"
                    onClick={() => setType("signIn")}
                >
                    Вже зареєстрован
                </p>
            )}
        </>
    )
}