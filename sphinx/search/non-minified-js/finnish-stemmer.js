// Generated from finnish.sbl by Snowball 3.0.1 - https://snowballstem.org/

/**@constructor*/
var FinnishStemmer = function() {
    var base = new BaseStemmer();

    /** @const */ var a_0 = [
        ["pa", -1, 1],
        ["sti", -1, 2],
        ["kaan", -1, 1],
        ["han", -1, 1],
        ["kin", -1, 1],
        ["h\u00E4n", -1, 1],
        ["k\u00E4\u00E4n", -1, 1],
        ["ko", -1, 1],
        ["p\u00E4", -1, 1],
        ["k\u00F6", -1, 1]
    ];

    /** @const */ var a_1 = [
        ["lla", -1, -1],
        ["na", -1, -1],
        ["ssa", -1, -1],
        ["ta", -1, -1],
        ["lta", 3, -1],
        ["sta", 3, -1]
    ];

    /** @const */ var a_2 = [
        ["ll\u00E4", -1, -1],
        ["n\u00E4", -1, -1],
        ["ss\u00E4", -1, -1],
        ["t\u00E4", -1, -1],
        ["lt\u00E4", 3, -1],
        ["st\u00E4", 3, -1]
    ];

    /** @const */ var a_3 = [
        ["lle", -1, -1],
        ["ine", -1, -1]
    ];

    /** @const */ var a_4 = [
        ["nsa", -1, 3],
        ["mme", -1, 3],
        ["nne", -1, 3],
        ["ni", -1, 2],
        ["si", -1, 1],
        ["an", -1, 4],
        ["en", -1, 6],
        ["\u00E4n", -1, 5],
        ["ns\u00E4", -1, 3]
    ];

    /** @const */ var a_5 = [
        ["aa", -1, -1],
        ["ee", -1, -1],
        ["ii", -1, -1],
        ["oo", -1, -1],
        ["uu", -1, -1],
        ["\u00E4\u00E4", -1, -1],
        ["\u00F6\u00F6", -1, -1]
    ];

    /** @const */ var a_6 = [
        ["a", -1, 8],
        ["lla", 0, -1],
        ["na", 0, -1],
        ["ssa", 0, -1],
        ["ta", 0, -1],
        ["lta", 4, -1],
        ["sta", 4, -1],
        ["tta", 4, 2],
        ["lle", -1, -1],
        ["ine", -1, -1],
        ["ksi", -1, -1],
        ["n", -1, 7],
        ["han", 11, 1],
        ["den", 11, -1, r_VI],
        ["seen", 11, -1, r_LONG],
        ["hen", 11, 2],
        ["tten", 11, -1, r_VI],
        ["hin", 11, 3],
        ["siin", 11, -1, r_VI],
        ["hon", 11, 4],
        ["h\u00E4n", 11, 5],
        ["h\u00F6n", 11, 6],
        ["\u00E4", -1, 8],
        ["ll\u00E4", 22, -1],
        ["n\u00E4", 22, -1],
        ["ss\u00E4", 22, -1],
        ["t\u00E4", 22, -1],
        ["lt\u00E4", 26, -1],
        ["st\u00E4", 26, -1],
        ["tt\u00E4", 26, 2]
    ];

    /** @const */ var a_7 = [
        ["eja", -1, -1],
        ["mma", -1, 1],
        ["imma", 1, -1],
        ["mpa", -1, 1],
        ["impa", 3, -1],
        ["mmi", -1, 1],
        ["immi", 5, -1],
        ["mpi", -1, 1],
        ["impi", 7, -1],
        ["ej\u00E4", -1, -1],
        ["mm\u00E4", -1, 1],
        ["imm\u00E4", 10, -1],
        ["mp\u00E4", -1, 1],
        ["imp\u00E4", 12, -1]
    ];

    /** @const */ var a_8 = [
        ["i", -1, -1],
        ["j", -1, -1]
    ];

    /** @const */ var a_9 = [
        ["mma", -1, 1],
        ["imma", 0, -1]
    ];

    /** @const */ var /** Array<int> */ g_AEI = [17, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8];

    /** @const */ var /** Array<int> */ g_C = [119, 223, 119, 1];

    /** @const */ var /** Array<int> */ g_V1 = [17, 65, 16, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 32];

    /** @const */ var /** Array<int> */ g_V2 = [17, 65, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 32];

    /** @const */ var /** Array<int> */ g_particle_end = [17, 97, 24, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 32];

    var /** boolean */ B_ending_removed = false;
    var /** string */ S_x = '';
    var /** number */ I_p2 = 0;
    var /** number */ I_p1 = 0;


    /** @return {boolean} */
    function r_mark_regions() {
        I_p1 = base.limit;
        I_p2 = base.limit;
        if (!base.go_out_grouping(g_V1, 97, 246))
        {
            return false;
        }
        base.cursor++;
        if (!base.go_in_grouping(g_V1, 97, 246))
        {
            return false;
        }
        base.cursor++;
        I_p1 = base.cursor;
        if (!base.go_out_grouping(g_V1, 97, 246))
        {
            return false;
        }
        base.cursor++;
        if (!base.go_in_grouping(g_V1, 97, 246))
        {
            return false;
        }
        base.cursor++;
        I_p2 = base.cursor;
        return true;
    };

    /** @return {boolean} */
    function r_R2() {
        return I_p2 <= base.cursor;
    };

    /** @return {boolean} */
    function r_particle_etc() {
        var /** number */ among_var;
        if (base.cursor < I_p1)
        {
            return false;
        }
        /** @const */ var /** number */ v_1 = base.limit_backward;
        base.limit_backward = I_p1;
        base.ket = base.cursor;
        among_var = base.find_among_b(a_0);
        if (among_var == 0)
        {
            base.limit_backward = v_1;
            return false;
        }
        base.bra = base.cursor;
        base.limit_backward = v_1;
        switch (among_var) {
            case 1:
                if (!(base.in_grouping_b(g_particle_end, 97, 246)))
                {
                    return false;
                }
                break;
            case 2:
                if (!r_R2())
                {
                    return false;
                }
                break;
        }
        if (!base.slice_del())
        {
            return false;
        }
        return true;
    };

    /** @return {boolean} */
    function r_possessive() {
        var /** number */ among_var;
        if (base.cursor < I_p1)
        {
            return false;
        }
        /** @const */ var /** number */ v_1 = base.limit_backward;
        base.limit_backward = I_p1;
        base.ket = base.cursor;
        among_var = base.find_among_b(a_4);
        if (among_var == 0)
        {
            base.limit_backward = v_1;
            return false;
        }
        base.bra = base.cursor;
        base.limit_backward = v_1;
        switch (among_var) {
            case 1:
                {
                    /** @const */ var /** number */ v_2 = base.limit - base.cursor;
                    lab0: {
                        if (!(base.eq_s_b("k")))
                        {
                            break lab0;
                        }
                        return false;
                    }
                    base.cursor = base.limit - v_2;
                }
                if (!base.slice_del())
                {
                    return false;
                }
                break;
            case 2:
                if (!base.slice_del())
                {
                    return false;
                }
                base.ket = base.cursor;
                if (!(base.eq_s_b("kse")))
                {
                    return false;
                }
                base.bra = base.cursor;
                if (!base.slice_from("ksi"))
                {
                    return false;
                }
                break;
            case 3:
                if (!base.slice_del())
                {
                    return false;
                }
                break;
            case 4:
                if (base.find_among_b(a_1) == 0)
                {
                    return false;
                }
                if (!base.slice_del())
                {
                    return false;
                }
                break;
            case 5:
                if (base.find_among_b(a_2) == 0)
                {
                    return false;
                }
                if (!base.slice_del())
                {
                    return false;
                }
                break;
            case 6:
                if (base.find_among_b(a_3) == 0)
                {
                    return false;
                }
                if (!base.slice_del())
                {
                    return false;
                }
                break;
        }
        return true;
    };

    /** @return {boolean} */
    function r_LONG() {
        if (base.find_among_b(a_5) == 0)
        {
            return false;
        }
        return true;
    };

    /** @return {boolean} */
    function r_VI() {
        if (!(base.eq_s_b("i")))
        {
            return false;
        }
        if (!(base.in_grouping_b(g_V2, 97, 246)))
        {
            return false;
        }
        return true;
    };

    /** @return {boolean} */
    function r_case_ending() {
        var /** number */ among_var;
        if (base.cursor < I_p1)
        {
            return false;
        }
        /** @const */ var /** number */ v_1 = base.limit_backward;
        base.limit_backward = I_p1;
        base.ket = base.cursor;
        among_var = base.find_among_b(a_6);
        if (among_var == 0)
        {
            base.limit_backward = v_1;
            return false;
        }
        base.bra = base.cursor;
        base.limit_backward = v_1;
        switch (among_var) {
            case 1:
                if (!(base.eq_s_b("a")))
                {
                    return false;
                }
                break;
            case 2:
                if (!(base.eq_s_b("e")))
                {
                    return false;
                }
                break;
            case 3:
                if (!(base.eq_s_b("i")))
                {
                    return false;
                }
                break;
            case 4:
                if (!(base.eq_s_b("o")))
                {
                    return false;
                }
                break;
            case 5:
                if (!(base.eq_s_b("\u00E4")))
                {
                    return false;
                }
                break;
            case 6:
                if (!(base.eq_s_b("\u00F6")))
                {
                    return false;
                }
                break;
            case 7:
                /** @const */ var /** number */ v_2 = base.limit - base.cursor;
                lab0: {
                    /** @const */ var /** number */ v_3 = base.limit - base.cursor;
                    lab1: {
                        /** @const */ var /** number */ v_4 = base.limit - base.cursor;
                        lab2: {
                            if (!r_LONG())
                            {
                                break lab2;
                            }
                            break lab1;
                        }
                        base.cursor = base.limit - v_4;
                        if (!(base.eq_s_b("ie")))
                        {
                            base.cursor = base.limit - v_2;
                            break lab0;
                        }
                    }
                    base.cursor = base.limit - v_3;
                    if (base.cursor <= base.limit_backward)
                    {
                        base.cursor = base.limit - v_2;
                        break lab0;
                    }
                    base.cursor--;
                    base.bra = base.cursor;
                }
                break;
            case 8:
                if (!(base.in_grouping_b(g_V1, 97, 246)))
                {
                    return false;
                }
                if (!(base.in_grouping_b(g_C, 98, 122)))
                {
                    return false;
                }
                break;
        }
        if (!base.slice_del())
        {
            return false;
        }
        B_ending_removed = true;
        return true;
    };

    /** @return {boolean} */
    function r_other_endings() {
        var /** number */ among_var;
        if (base.cursor < I_p2)
        {
            return false;
        }
        /** @const */ var /** number */ v_1 = base.limit_backward;
        base.limit_backward = I_p2;
        base.ket = base.cursor;
        among_var = base.find_among_b(a_7);
        if (among_var == 0)
        {
            base.limit_backward = v_1;
            return false;
        }
        base.bra = base.cursor;
        base.limit_backward = v_1;
        switch (among_var) {
            case 1:
                {
                    /** @const */ var /** number */ v_2 = base.limit - base.cursor;
                    lab0: {
                        if (!(base.eq_s_b("po")))
                        {
                            break lab0;
                        }
                        return false;
                    }
                    base.cursor = base.limit - v_2;
                }
                break;
        }
        if (!base.slice_del())
        {
            return false;
        }
        return true;
    };

    /** @return {boolean} */
    function r_i_plural() {
        if (base.cursor < I_p1)
        {
            return false;
        }
        /** @const */ var /** number */ v_1 = base.limit_backward;
        base.limit_backward = I_p1;
        base.ket = base.cursor;
        if (base.find_among_b(a_8) == 0)
        {
            base.limit_backward = v_1;
            return false;
        }
        base.bra = base.cursor;
        base.limit_backward = v_1;
        if (!base.slice_del())
        {
            return false;
        }
        return true;
    };

    /** @return {boolean} */
    function r_t_plural() {
        var /** number */ among_var;
        if (base.cursor < I_p1)
        {
            return false;
        }
        /** @const */ var /** number */ v_1 = base.limit_backward;
        base.limit_backward = I_p1;
        base.ket = base.cursor;
        if (!(base.eq_s_b("t")))
        {
            base.limit_backward = v_1;
            return false;
        }
        base.bra = base.cursor;
        /** @const */ var /** number */ v_2 = base.limit - base.cursor;
        if (!(base.in_grouping_b(g_V1, 97, 246)))
        {
            base.limit_backward = v_1;
            return false;
        }
        base.cursor = base.limit - v_2;
        if (!base.slice_del())
        {
            return false;
        }
        base.limit_backward = v_1;
        if (base.cursor < I_p2)
        {
            return false;
        }
        /** @const */ var /** number */ v_3 = base.limit_backward;
        base.limit_backward = I_p2;
        base.ket = base.cursor;
        among_var = base.find_among_b(a_9);
        if (among_var == 0)
        {
            base.limit_backward = v_3;
            return false;
        }
        base.bra = base.cursor;
        base.limit_backward = v_3;
        switch (among_var) {
            case 1:
                {
                    /** @const */ var /** number */ v_4 = base.limit - base.cursor;
                    lab0: {
                        if (!(base.eq_s_b("po")))
                        {
                            break lab0;
                        }
                        return false;
                    }
                    base.cursor = base.limit - v_4;
                }
                break;
        }
        if (!base.slice_del())
        {
            return false;
        }
        return true;
    };

    /** @return {boolean} */
    function r_tidy() {
        if (base.cursor < I_p1)
        {
            return false;
        }
        /** @const */ var /** number */ v_1 = base.limit_backward;
        base.limit_backward = I_p1;
        /** @const */ var /** number */ v_2 = base.limit - base.cursor;
        lab0: {
            /** @const */ var /** number */ v_3 = base.limit - base.cursor;
            if (!r_LONG())
            {
                break lab0;
            }
            base.cursor = base.limit - v_3;
            base.ket = base.cursor;
            if (base.cursor <= base.limit_backward)
            {
                break lab0;
            }
            base.cursor--;
            base.bra = base.cursor;
            if (!base.slice_del())
            {
                return false;
            }
        }
        base.cursor = base.limit - v_2;
        /** @const */ var /** number */ v_4 = base.limit - base.cursor;
        lab1: {
            base.ket = base.cursor;
            if (!(base.in_grouping_b(g_AEI, 97, 228)))
            {
                break lab1;
            }
            base.bra = base.cursor;
            if (!(base.in_grouping_b(g_C, 98, 122)))
            {
                break lab1;
            }
            if (!base.slice_del())
            {
                return false;
            }
        }
        base.cursor = base.limit - v_4;
        /** @const */ var /** number */ v_5 = base.limit - base.cursor;
        lab2: {
            base.ket = base.cursor;
            if (!(base.eq_s_b("j")))
            {
                break lab2;
            }
            base.bra = base.cursor;
            lab3: {
                /** @const */ var /** number */ v_6 = base.limit - base.cursor;
                lab4: {
                    if (!(base.eq_s_b("o")))
                    {
                        break lab4;
                    }
                    break lab3;
                }
                base.cursor = base.limit - v_6;
                if (!(base.eq_s_b("u")))
                {
                    break lab2;
                }
            }
            if (!base.slice_del())
            {
                return false;
            }
        }
        base.cursor = base.limit - v_5;
        /** @const */ var /** number */ v_7 = base.limit - base.cursor;
        lab5: {
            base.ket = base.cursor;
            if (!(base.eq_s_b("o")))
            {
                break lab5;
            }
            base.bra = base.cursor;
            if (!(base.eq_s_b("j")))
            {
                break lab5;
            }
            if (!base.slice_del())
            {
                return false;
            }
        }
        base.cursor = base.limit - v_7;
        base.limit_backward = v_1;
        if (!base.go_in_grouping_b(g_V1, 97, 246))
        {
            return false;
        }
        base.ket = base.cursor;
        if (!(base.in_grouping_b(g_C, 98, 122)))
        {
            return false;
        }
        base.bra = base.cursor;
        S_x = base.slice_to();
        if (S_x == '')
        {
            return false;
        }
        if (!(base.eq_s_b(S_x)))
        {
            return false;
        }
        if (!base.slice_del())
        {
            return false;
        }
        return true;
    };

    this.stem = /** @return {boolean} */ function() {
        /** @const */ var /** number */ v_1 = base.cursor;
        r_mark_regions();
        base.cursor = v_1;
        B_ending_removed = false;
        base.limit_backward = base.cursor; base.cursor = base.limit;
        /** @const */ var /** number */ v_2 = base.limit - base.cursor;
        r_particle_etc();
        base.cursor = base.limit - v_2;
        /** @const */ var /** number */ v_3 = base.limit - base.cursor;
        r_possessive();
        base.cursor = base.limit - v_3;
        /** @const */ var /** number */ v_4 = base.limit - base.cursor;
        r_case_ending();
        base.cursor = base.limit - v_4;
        /** @const */ var /** number */ v_5 = base.limit - base.cursor;
        r_other_endings();
        base.cursor = base.limit - v_5;
        lab0: {
            lab1: {
                if (!B_ending_removed)
                {
                    break lab1;
                }
                /** @const */ var /** number */ v_6 = base.limit - base.cursor;
                r_i_plural();
                base.cursor = base.limit - v_6;
                break lab0;
            }
            /** @const */ var /** number */ v_7 = base.limit - base.cursor;
            r_t_plural();
            base.cursor = base.limit - v_7;
        }
        /** @const */ var /** number */ v_8 = base.limit - base.cursor;
        r_tidy();
        base.cursor = base.limit - v_8;
        base.cursor = base.limit_backward;
        return true;
    };

    /**@return{string}*/
    this['stemWord'] = function(/**string*/word) {
        base.setCurrent(word);
        this.stem();
        return base.getCurrent();
    };
};
