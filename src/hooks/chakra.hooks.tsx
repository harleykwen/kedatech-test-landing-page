function useChakraHooks() {
    const INPUT_VISIBLE_STYLE = {
        _focusVisible: {
            borderColor: '#252430',
            boxShadow: '0 0 0 1px #252430'
        }
    }

    const BUTTON_MAIN_STYLE = {
        width: '100%',
        fontSize: '14px',
        color: '#E6E9F5',
        fontWeight: '600',
        padding: '16px 24px',
        borderRadius: '4px',
        backgroundColor: '#252430',
        _hover: {
            backgroundColor: '#3a3944'
        },
        _focus: {
            backgroundColor: '#121218'
        },
        _active: {
            backgroundColor: '#121218'
        },
    }

    return {
        INPUT_VISIBLE_STYLE,
        BUTTON_MAIN_STYLE,
    }
}

export default useChakraHooks