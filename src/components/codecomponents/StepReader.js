import { parse } from 'shell-quote'

export function readStepFromElement(element, parsed, count) {
	if (!element.props.children || !element.props.children.props) {
		return null
	}
	const { props } = element.props.children
	const className = props.className
	// props.metastring
	// let metastring = "javascript 1,4,5"
	
	parsed = JSON.parse(parsed);
	if (parsed[count]) {
		parsed = parsed[count];
	} else {
		parsed = undefined;
	}

	return {
		code: buildCode(props.children.props.children),
		lang: className.substring('language-'.length),
		...parseMetastring(parsed)
    }
}

function buildCode(element) {
    let code = '';
    for (let i in element) {
        if (element[i].props && element[i].props.mdxType === 'span')
            code += element[i].props.children;
        else
            code += element[i]
    }
    
    return code
}

function parseMetastring(metastring) {
	if (!metastring) {
		return {}
	}

	const argv = parse(metastring)

	const result = {}
	argv.forEach(arg => {
		if (!arg.includes('=')) {
			result.focus = arg
		} else {
			const [key, value] = arg.split(/=(.*)/)
			result[key] = value
		}
	})
	return result
}
