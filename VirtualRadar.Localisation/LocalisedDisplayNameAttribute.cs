﻿// Copyright © 2012 onwards, Andrew Whewell
// All rights reserved.
//
// Redistribution and use of this software in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
//    * Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
//    * Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
//    * Neither the name of the author nor the names of the program's contributors may be used to endorse or promote products derived from this software without specific prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE AUTHORS OF THE SOFTWARE BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.ComponentModel;

namespace VirtualRadar.Localisation
{
    /// <summary>
    /// A localisable version of the ComponentModel <see cref="DisplayNameAttribute"/>.
    /// </summary>
    public class LocalisedDisplayNameAttribute : DisplayNameAttribute
    {
        /// <summary>
        /// The translation associated with the key supplied by the constructor.
        /// </summary>
        private string _OriginalDisplayName;

        /// <summary>
        /// The key to the translation - this is used as the key to the prefixes in <see cref="_Prefixes"/>.
        /// </summary>
        private string _Key;

        /// <summary>
        /// A map of keys to prefixes.
        /// </summary>
        private static Dictionary<string, string> _Prefixes = new Dictionary<string,string>();

        /// <summary>
        /// See base docs.
        /// </summary>
        public override string DisplayName
        {
            get
            {
                string prefixes;
                return _Prefixes.TryGetValue(_Key, out prefixes) ? prefixes + _OriginalDisplayName : _OriginalDisplayName;
            }
        }

        /// <summary>
        /// Creates a new object.
        /// </summary>
        /// <param name="key">The index of the string to look up.</param>
        public LocalisedDisplayNameAttribute(string key)
        {
            _Key = key;
            _OriginalDisplayName = Localise.Lookup(key);
        }

        /// <summary>
        /// Adds leading text to the display name to force the correct sort order in property grids.
        /// </summary>
        /// <param name="categoryPrefix"></param>
        /// <param name="displayOrder"></param>
        /// <param name="totalDisplayItems"></param>
        /// <remarks>
        /// The normal method for sorting properties in a grid with PropertySortMode.Category, which is to create a type
        /// descriptor for the owning object and call Sort on the PropertyDescriptorCollection it creates, does not work
        /// under Mono. This will work for both .NET and Mono.
        /// </remarks>
        public void ForceMonoSortOrder(string categoryPrefix, int displayOrder, int totalDisplayItems)
        {
            var prefix = String.Format(String.Format("{{0}}{{1:{0}}} ", totalDisplayItems > 9 ? "00" : "0"), categoryPrefix, displayOrder + 1);
            if(_Prefixes.ContainsKey(_Key)) _Prefixes[_Key] = prefix;
            else _Prefixes.Add(_Key, prefix);
        }
    }
}
