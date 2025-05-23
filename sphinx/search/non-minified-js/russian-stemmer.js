// Generated from russian.sbl by Snowball 3.0.1 - https://snowballstem.org/

/**@constructor*/
var RussianStemmer = function() {
    var base = new BaseStemmer();

    /** @const */ var a_0 = [
        ["\u0432", -1, 1],
        ["\u0438\u0432", 0, 2],
        ["\u044B\u0432", 0, 2],
        ["\u0432\u0448\u0438", -1, 1],
        ["\u0438\u0432\u0448\u0438", 3, 2],
        ["\u044B\u0432\u0448\u0438", 3, 2],
        ["\u0432\u0448\u0438\u0441\u044C", -1, 1],
        ["\u0438\u0432\u0448\u0438\u0441\u044C", 6, 2],
        ["\u044B\u0432\u0448\u0438\u0441\u044C", 6, 2]
    ];

    /** @const */ var a_1 = [
        ["\u0435\u0435", -1, 1],
        ["\u0438\u0435", -1, 1],
        ["\u043E\u0435", -1, 1],
        ["\u044B\u0435", -1, 1],
        ["\u0438\u043C\u0438", -1, 1],
        ["\u044B\u043C\u0438", -1, 1],
        ["\u0435\u0439", -1, 1],
        ["\u0438\u0439", -1, 1],
        ["\u043E\u0439", -1, 1],
        ["\u044B\u0439", -1, 1],
        ["\u0435\u043C", -1, 1],
        ["\u0438\u043C", -1, 1],
        ["\u043E\u043C", -1, 1],
        ["\u044B\u043C", -1, 1],
        ["\u0435\u0433\u043E", -1, 1],
        ["\u043E\u0433\u043E", -1, 1],
        ["\u0435\u043C\u0443", -1, 1],
        ["\u043E\u043C\u0443", -1, 1],
        ["\u0438\u0445", -1, 1],
        ["\u044B\u0445", -1, 1],
        ["\u0435\u044E", -1, 1],
        ["\u043E\u044E", -1, 1],
        ["\u0443\u044E", -1, 1],
        ["\u044E\u044E", -1, 1],
        ["\u0430\u044F", -1, 1],
        ["\u044F\u044F", -1, 1]
    ];

    /** @const */ var a_2 = [
        ["\u0435\u043C", -1, 1],
        ["\u043D\u043D", -1, 1],
        ["\u0432\u0448", -1, 1],
        ["\u0438\u0432\u0448", 2, 2],
        ["\u044B\u0432\u0448", 2, 2],
        ["\u0449", -1, 1],
        ["\u044E\u0449", 5, 1],
        ["\u0443\u044E\u0449", 6, 2]
    ];

    /** @const */ var a_3 = [
        ["\u0441\u044C", -1, 1],
        ["\u0441\u044F", -1, 1]
    ];

    /** @const */ var a_4 = [
        ["\u043B\u0430", -1, 1],
        ["\u0438\u043B\u0430", 0, 2],
        ["\u044B\u043B\u0430", 0, 2],
        ["\u043D\u0430", -1, 1],
        ["\u0435\u043D\u0430", 3, 2],
        ["\u0435\u0442\u0435", -1, 1],
        ["\u0438\u0442\u0435", -1, 2],
        ["\u0439\u0442\u0435", -1, 1],
        ["\u0435\u0439\u0442\u0435", 7, 2],
        ["\u0443\u0439\u0442\u0435", 7, 2],
        ["\u043B\u0438", -1, 1],
        ["\u0438\u043B\u0438", 10, 2],
        ["\u044B\u043B\u0438", 10, 2],
        ["\u0439", -1, 1],
        ["\u0435\u0439", 13, 2],
        ["\u0443\u0439", 13, 2],
        ["\u043B", -1, 1],
        ["\u0438\u043B", 16, 2],
        ["\u044B\u043B", 16, 2],
        ["\u0435\u043C", -1, 1],
        ["\u0438\u043C", -1, 2],
        ["\u044B\u043C", -1, 2],
        ["\u043D", -1, 1],
        ["\u0435\u043D", 22, 2],
        ["\u043B\u043E", -1, 1],
        ["\u0438\u043B\u043E", 24, 2],
        ["\u044B\u043B\u043E", 24, 2],
        ["\u043D\u043E", -1, 1],
        ["\u0435\u043D\u043E", 27, 2],
        ["\u043D\u043D\u043E", 27, 1],
        ["\u0435\u0442", -1, 1],
        ["\u0443\u0435\u0442", 30, 2],
        ["\u0438\u0442", -1, 2],
        ["\u044B\u0442", -1, 2],
        ["\u044E\u0442", -1, 1],
        ["\u0443\u044E\u0442", 34, 2],
        ["\u044F\u0442", -1, 2],
        ["\u043D\u044B", -1, 1],
        ["\u0435\u043D\u044B", 37, 2],
        ["\u0442\u044C", -1, 1],
        ["\u0438\u0442\u044C", 39, 2],
        ["\u044B\u0442\u044C", 39, 2],
        ["\u0435\u0448\u044C", -1, 1],
        ["\u0438\u0448\u044C", -1, 2],
        ["\u044E", -1, 2],
        ["\u0443\u044E", 44, 2]
    ];

    /** @const */ var a_5 = [
        ["\u0430", -1, 1],
        ["\u0435\u0432", -1, 1],
        ["\u043E\u0432", -1, 1],
        ["\u0435", -1, 1],
        ["\u0438\u0435", 3, 1],
        ["\u044C\u0435", 3, 1],
        ["\u0438", -1, 1],
        ["\u0435\u0438", 6, 1],
        ["\u0438\u0438", 6, 1],
        ["\u0430\u043C\u0438", 6, 1],
        ["\u044F\u043C\u0438", 6, 1],
        ["\u0438\u044F\u043C\u0438", 10, 1],
        ["\u0439", -1, 1],
        ["\u0435\u0439", 12, 1],
        ["\u0438\u0435\u0439", 13, 1],
        ["\u0438\u0439", 12, 1],
        ["\u043E\u0439", 12, 1],
        ["\u0430\u043C", -1, 1],
        ["\u0435\u043C", -1, 1],
        ["\u0438\u0435\u043C", 18, 1],
        ["\u043E\u043C", -1, 1],
        ["\u044F\u043C", -1, 1],
        ["\u0438\u044F\u043C", 21, 1],
        ["\u043E", -1, 1],
        ["\u0443", -1, 1],
        ["\u0430\u0445", -1, 1],
        ["\u044F\u0445", -1, 1],
        ["\u0438\u044F\u0445", 26, 1],
        ["\u044B", -1, 1],
        ["\u044C", -1, 1],
        ["\u044E", -1, 1],
        ["\u0438\u044E", 30, 1],
        ["\u044C\u044E", 30, 1],
        ["\u044F", -1, 1],
        ["\u0438\u044F", 33, 1],
        ["\u044C\u044F", 33, 1]
    ];

    /** @const */ var a_6 = [
        ["\u043E\u0441\u0442", -1, 1],
        ["\u043E\u0441\u0442\u044C", -1, 1]
    ];

    /** @const */ var a_7 = [
        ["\u0435\u0439\u0448\u0435", -1, 1],
        ["\u043D", -1, 2],
        ["\u0435\u0439\u0448", -1, 1],
        ["\u044C", -1, 3]
    ];

    /** @const */ var /** Array<int> */ g_v = [33, 65, 8, 232];

    var /** number */ I_p2 = 0;
    var /** number */ I_pV = 0;


    /** @return {boolean} */
    function r_mark_regions() {
        I_pV = base.limit;
        I_p2 = base.limit;
        /** @const */ var /** number */ v_1 = base.cursor;
        lab0: {
            if (!base.go_out_grouping(g_v, 1072, 1103))
            {
                break lab0;
            }
            base.cursor++;
            I_pV = base.cursor;
            if (!base.go_in_grouping(g_v, 1072, 1103))
            {
                break lab0;
            }
            base.cursor++;
            if (!base.go_out_grouping(g_v, 1072, 1103))
            {
                break lab0;
            }
            base.cursor++;
            if (!base.go_in_grouping(g_v, 1072, 1103))
            {
                break lab0;
            }
            base.cursor++;
            I_p2 = base.cursor;
        }
        base.cursor = v_1;
        return true;
    };

    /** @return {boolean} */
    function r_R2() {
        return I_p2 <= base.cursor;
    };

    /** @return {boolean} */
    function r_perfective_gerund() {
        var /** number */ among_var;
        base.ket = base.cursor;
        among_var = base.find_among_b(a_0);
        if (among_var == 0)
        {
            return false;
        }
        base.bra = base.cursor;
        switch (among_var) {
            case 1:
                lab0: {
                    /** @const */ var /** number */ v_1 = base.limit - base.cursor;
                    lab1: {
                        if (!(base.eq_s_b("\u0430")))
                        {
                            break lab1;
                        }
                        break lab0;
                    }
                    base.cursor = base.limit - v_1;
                    if (!(base.eq_s_b("\u044F")))
                    {
                        return false;
                    }
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
                break;
        }
        return true;
    };

    /** @return {boolean} */
    function r_adjective() {
        base.ket = base.cursor;
        if (base.find_among_b(a_1) == 0)
        {
            return false;
        }
        base.bra = base.cursor;
        if (!base.slice_del())
        {
            return false;
        }
        return true;
    };

    /** @return {boolean} */
    function r_adjectival() {
        var /** number */ among_var;
        if (!r_adjective())
        {
            return false;
        }
        /** @const */ var /** number */ v_1 = base.limit - base.cursor;
        lab0: {
            base.ket = base.cursor;
            among_var = base.find_among_b(a_2);
            if (among_var == 0)
            {
                base.cursor = base.limit - v_1;
                break lab0;
            }
            base.bra = base.cursor;
            switch (among_var) {
                case 1:
                    lab1: {
                        /** @const */ var /** number */ v_2 = base.limit - base.cursor;
                        lab2: {
                            if (!(base.eq_s_b("\u0430")))
                            {
                                break lab2;
                            }
                            break lab1;
                        }
                        base.cursor = base.limit - v_2;
                        if (!(base.eq_s_b("\u044F")))
                        {
                            base.cursor = base.limit - v_1;
                            break lab0;
                        }
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
                    break;
            }
        }
        return true;
    };

    /** @return {boolean} */
    function r_reflexive() {
        base.ket = base.cursor;
        if (base.find_among_b(a_3) == 0)
        {
            return false;
        }
        base.bra = base.cursor;
        if (!base.slice_del())
        {
            return false;
        }
        return true;
    };

    /** @return {boolean} */
    function r_verb() {
        var /** number */ among_var;
        base.ket = base.cursor;
        among_var = base.find_among_b(a_4);
        if (among_var == 0)
        {
            return false;
        }
        base.bra = base.cursor;
        switch (among_var) {
            case 1:
                lab0: {
                    /** @const */ var /** number */ v_1 = base.limit - base.cursor;
                    lab1: {
                        if (!(base.eq_s_b("\u0430")))
                        {
                            break lab1;
                        }
                        break lab0;
                    }
                    base.cursor = base.limit - v_1;
                    if (!(base.eq_s_b("\u044F")))
                    {
                        return false;
                    }
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
                break;
        }
        return true;
    };

    /** @return {boolean} */
    function r_noun() {
        base.ket = base.cursor;
        if (base.find_among_b(a_5) == 0)
        {
            return false;
        }
        base.bra = base.cursor;
        if (!base.slice_del())
        {
            return false;
        }
        return true;
    };

    /** @return {boolean} */
    function r_derivational() {
        base.ket = base.cursor;
        if (base.find_among_b(a_6) == 0)
        {
            return false;
        }
        base.bra = base.cursor;
        if (!r_R2())
        {
            return false;
        }
        if (!base.slice_del())
        {
            return false;
        }
        return true;
    };

    /** @return {boolean} */
    function r_tidy_up() {
        var /** number */ among_var;
        base.ket = base.cursor;
        among_var = base.find_among_b(a_7);
        if (among_var == 0)
        {
            return false;
        }
        base.bra = base.cursor;
        switch (among_var) {
            case 1:
                if (!base.slice_del())
                {
                    return false;
                }
                base.ket = base.cursor;
                if (!(base.eq_s_b("\u043D")))
                {
                    return false;
                }
                base.bra = base.cursor;
                if (!(base.eq_s_b("\u043D")))
                {
                    return false;
                }
                if (!base.slice_del())
                {
                    return false;
                }
                break;
            case 2:
                if (!(base.eq_s_b("\u043D")))
                {
                    return false;
                }
                if (!base.slice_del())
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
        }
        return true;
    };

    this.stem = /** @return {boolean} */ function() {
        /** @const */ var /** number */ v_1 = base.cursor;
        lab0: {
            while(true)
            {
                /** @const */ var /** number */ v_2 = base.cursor;
                lab1: {
                    golab2: while(true)
                    {
                        /** @const */ var /** number */ v_3 = base.cursor;
                        lab3: {
                            base.bra = base.cursor;
                            if (!(base.eq_s("\u0451")))
                            {
                                break lab3;
                            }
                            base.ket = base.cursor;
                            base.cursor = v_3;
                            break golab2;
                        }
                        base.cursor = v_3;
                        if (base.cursor >= base.limit)
                        {
                            break lab1;
                        }
                        base.cursor++;
                    }
                    if (!base.slice_from("\u0435"))
                    {
                        return false;
                    }
                    continue;
                }
                base.cursor = v_2;
                break;
            }
        }
        base.cursor = v_1;
        r_mark_regions();
        base.limit_backward = base.cursor; base.cursor = base.limit;
        if (base.cursor < I_pV)
        {
            return false;
        }
        /** @const */ var /** number */ v_4 = base.limit_backward;
        base.limit_backward = I_pV;
        /** @const */ var /** number */ v_5 = base.limit - base.cursor;
        lab4: {
            lab5: {
                /** @const */ var /** number */ v_6 = base.limit - base.cursor;
                lab6: {
                    if (!r_perfective_gerund())
                    {
                        break lab6;
                    }
                    break lab5;
                }
                base.cursor = base.limit - v_6;
                /** @const */ var /** number */ v_7 = base.limit - base.cursor;
                lab7: {
                    if (!r_reflexive())
                    {
                        base.cursor = base.limit - v_7;
                        break lab7;
                    }
                }
                lab8: {
                    /** @const */ var /** number */ v_8 = base.limit - base.cursor;
                    lab9: {
                        if (!r_adjectival())
                        {
                            break lab9;
                        }
                        break lab8;
                    }
                    base.cursor = base.limit - v_8;
                    lab10: {
                        if (!r_verb())
                        {
                            break lab10;
                        }
                        break lab8;
                    }
                    base.cursor = base.limit - v_8;
                    if (!r_noun())
                    {
                        break lab4;
                    }
                }
            }
        }
        base.cursor = base.limit - v_5;
        /** @const */ var /** number */ v_9 = base.limit - base.cursor;
        lab11: {
            base.ket = base.cursor;
            if (!(base.eq_s_b("\u0438")))
            {
                base.cursor = base.limit - v_9;
                break lab11;
            }
            base.bra = base.cursor;
            if (!base.slice_del())
            {
                return false;
            }
        }
        /** @const */ var /** number */ v_10 = base.limit - base.cursor;
        r_derivational();
        base.cursor = base.limit - v_10;
        /** @const */ var /** number */ v_11 = base.limit - base.cursor;
        r_tidy_up();
        base.cursor = base.limit - v_11;
        base.limit_backward = v_4;
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
