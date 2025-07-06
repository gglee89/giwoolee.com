import Terminal from './Terminal'

const General = () => {
    return (
        <div className="flex flex-col gap-6 text-sm p-7 text-left">
            <Terminal
                title="About"
                text={
                    <>
                        <code className="block text-green-200">
                            # giwoogustavolee @ Giwoo-MacBook-Pro in ~
                        </code>
                        <span className="inline-block text-violet-300 mr-1">
                            $ [What do I do]
                        </span>
                        I'm overseeing full application release cycles
                        involving: TypeScript, React, Redux, Underscore/Lodash,
                        Jest / Mocha / Jasmine / Sinon, Handlebars, Webpack,
                        Node.js, MongoDB, DynamoDB, AWS S3, AWS ECS, AWS EKS,
                        responsive, cross-browser compatibility, and mobile
                        first approaches. I developed apps that works in the
                        financial, management, entertainment, and healthcare
                        industry mainly using the MERN stack and other minor
                        extensions such as Lambda, API Gateway, AngularJS,
                        WordPress, and SAP UI5. I love to create applications
                        that bring real impact to users.
                        <br />
                        <span className="inline-block text-violet-300 mr-1">
                            $ [Code + Unit Testing === Good Quality Code]
                        </span>
                        I believe JavaScript unit testing is important and that
                        adding quality controls to workflows (like ESLint &
                        stylelint) helps teams learn/grow as well as helps to
                        ensure that websites/apps work well across a myriad of
                        browser, platforms, and devices.
                        <br />
                        <span className="inline-block text-violet-300 mr-1">
                            $ [DRY w/ Design Patterns]
                        </span>
                        I believe that applying design patterns and practices to
                        the entire development stack and operational processes
                        helps big teams working on large codebases to be able to
                        secure, maintain and extend code.
                        <br />
                        <span className="inline-block text-violet-300 mr-1">
                            $ [Mentor]
                        </span>
                        I enjoy mentoring others, setting direction for best
                        practices, digging into new tech, and exploring ways to
                        make B2C applications with better UX.
                    </>
                }
            />
            <Terminal
                title="Currently..."
                text={
                    <>
                        <code className="block text-green-200">
                            # giwoogustavolee @ Giwoo-MacBook-Pro in ~
                        </code>
                        <span className="inline-block text-violet-300 mr-1">
                            $
                        </span>
                        <span>python</span>
                        <code className="block text-green-200">
                            Python 2.7.10 (default, Oct 6 2017, 22:29:07)
                        </code>
                        <code className="block text-green-200">
                            [GCC 4.2.1 Compatible Apple LLVM 9.0.0
                            (clang-900.0.31)] on darwin
                        </code>
                        <code className="block text-green-200">
                            Type &#34;help&#34;, &#34;copyright&#34;,
                            &#34;credits&#34; or &#34;license&#34; for more
                            information.
                        </code>
                        <code className="block text-green-200">
                            &gt;&gt;&gt;{' '}
                        </code>
                        <code className="block text-green-200">
                            &gt;&gt;&gt; import activities_doing from general
                        </code>
                        <code className="block text-green-200">
                            &gt;&gt;&gt; print(activities_doing.currently)
                        </code>
                        <code className="block text-green-200">
                            A Cloud Architect & Web Development Enthusiast.
                            Working as a Full Stack Developer.
                        </code>
                        <span className="inline-block text-violet-300 mr-1">
                            $
                        </span>
                        <span>
                            echo This is not really a terminal (It's just
                            HTML+CSS)
                        </span>
                    </>
                }
            />

            <Terminal
                title="So far"
                text={
                    <>
                        <span className="inline-block text-violet-300 mr-1">
                            # giwoogustavolee @ Giwoo-MacBook-Pro in ~
                        </span>
                        <span className="inline-block text-violet-300 mr-1">
                            $ [Web Development]
                        </span>{' '}
                        8+ years advancing in the IT industry. Shaped products
                        as a Data Engineer with BI, with Mainframes (batch
                        processing), and Web/Mobile development. Experienced in
                        developing internal web platforms for the entertainment
                        and financial industries and also with B2C customer
                        facing applications. Actively contributed on UI/UX,
                        software specification, and project management in
                        parallel with web development.
                        <span className="inline-block w-2 h-4 bg-green-500 animate-pulse ml-1 align-middle" />
                    </>
                }
            />
        </div>
    )
}

export default General
